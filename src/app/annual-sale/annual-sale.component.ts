import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnnualSale } from '../shared/models/annual-sale.model';
import { MonthEnum } from '../shared/enums/month.enum';
import { MonthlySale } from '../shared/models/monthly-sale.model';
import { DialogService, ConfirmationService } from 'primeng/api';
import { MonthlySaleDialogComponent } from '../monthly-sale/monthly-sale-dialog/monthly-sale-dialog.component';
import { User } from '../shared/models/user.model';
import { AnnualService } from '../shared/services/annual.service';


@Component({
  selector: 'app-annual-sale',
  templateUrl: './annual-sale.component.html',
  styleUrls: ['./annual-sale.component.scss']
})
export class AnnualSaleComponent implements OnInit {

  public MonthEnum: typeof MonthEnum = MonthEnum;
  public months: string[];


  @Input()
  public user: User;

  @Input()
  public annualSale: AnnualSale;

  @Output()
  public deleteEvent: EventEmitter<AnnualSale> = new EventEmitter<AnnualSale>();

  constructor(private dialogService: DialogService, private annualService: AnnualService) { }

  ngOnInit() {
    this.months = Object.keys(MonthEnum).filter(key => !isNaN(Number(MonthEnum[key])));
  }

  public getMonthlySale(month: string): MonthlySale {
    // MonthEnum[0] -> January
    // MonthEnum['January'] -> 0
    return this.annualSale.monthlySales ? this.annualSale.monthlySales.find((monthlySale: MonthlySale) => monthlySale.month === MonthEnum[month]) : null;
  }

  public showMonthlySaleDialog(month: string) {
    let monthlySale = this.getMonthlySale(month);

    // Si monthlySale est null, ça veut dire que un CA mensuel n'existe donc il s'agit d'une création
    // Sinon il est un CA pour le mois concerné
    // !monthlySale => monthlySale == null
    // monthlySale => monthlySale != null
    if (!monthlySale) {
      monthlySale = new MonthlySale();
      monthlySale.month = MonthEnum[month];
    }

    const ref = this.dialogService.open(MonthlySaleDialogComponent, {
      header: monthlySale.id ? 'Update monthly Sales' : 'Create monthly sales',
      data: {
        user: this.user,
        annualSale: this.annualSale,
        monthly: monthlySale
      },
    });

    ref.onClose.subscribe((result: MonthlySale) => {
      if (result) {

        this.annualService.getAnnualSale(this.user.id, this.annualSale.id).subscribe((annualSale: AnnualSale) => {
          this.annualSale.monthlySales = annualSale.monthlySales;
          this.annualSale.sales = annualSale.sales;
          this.annualSale.socialCharges = annualSale.socialCharges;
          this.annualSale.professionalFees = annualSale.professionalFees;
        });
      }
    });
  }

  public getBenefit(): number {
    return this.annualSale.sales - this.annualSale.socialCharges - this.annualSale.professionalFees;
  }

  public confirmDelete() {
    this.deleteEvent.emit(this.annualSale);
  }
}
