import { Component, OnInit, Input } from '@angular/core';
import { MonthlyService } from 'src/app/shared/services/monthly.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { MonthlySale } from 'src/app/shared/models/monthly-sale.model';
import { MonthEnum } from 'src/app/shared/enums/month.enum';

@Component({
  selector: 'app-monthly-sale-dialog',
  templateUrl: './monthly-sale-dialog.component.html',
  styleUrls: ['./monthly-sale-dialog.component.scss']
})
export class MonthlySaleDialogComponent implements OnInit {

  // public sales: number;
  // public socialCharges: number;
  // public professionalFees: number;

  // Un CA mensuel à créer ou modifier
  public monthlySale: MonthlySale;

  constructor(private monthlyService: MonthlyService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  public ngOnInit() {
    this.monthlySale = this.config.data.monthly;
  }

  public shouldDisable(): boolean {
    return this.monthlySale.sales ? isNaN(this.monthlySale.sales) : true;
  }

  public confirm() {
    // const monthlySale = new MonthlySale();
    // monthlySale.month = MonthEnum[this.config.data.monthLong as string];
    // monthlySale.sales = this.sales;
    // monthlySale.socialCharges = this.socialCharges;
    // monthlySale.professionalFees = this.professionalFees;
    // console.log(monthlySale);

    if (this.monthlySale.id) {
      this.monthlyService.updateMonthlySale(this.config.data.user.id, this.config.data.annualSale.id, this.monthlySale).subscribe((m: MonthlySale) => this.ref.close(m));
    } else {
      this.monthlyService.createMonthlySale(this.config.data.user.id, this.config.data.annualSale.id, this.monthlySale).subscribe((m: MonthlySale) => this.ref.close(m));
    }

  }

  public cancel() {
    this.ref.close();
  }

  public delete() {
    this.monthlyService.deleteMonthlySale(this.config.data.user.id, this.config.data.annualSale.id, this.monthlySale.id).subscribe(() => this.ref.close(true));
  }

}
