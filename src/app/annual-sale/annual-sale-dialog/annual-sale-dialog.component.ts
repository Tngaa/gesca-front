import { Component, OnInit, Input } from '@angular/core';
import { AnnualService } from 'src/app/shared/services/annual.service';
import { AnnualSale } from 'src/app/shared/models/annual-sale.model';
import { User } from 'src/app/shared/models/user.model';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-annual-sale-dialog',
  templateUrl: './annual-sale-dialog.component.html',
  styleUrls: ['./annual-sale-dialog.component.scss']
})
export class AnnualSaleDialogComponent implements OnInit {

  @Input()
  public user: User;

  public year: number;


  constructor(private annualService: AnnualService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    // this.year = 2019;
  }
  public shouldDisable(): boolean {
    return this.year ? isNaN(this.year) : true;
  }


  public confirm() {
    const annualSale = new AnnualSale();
    annualSale.year = this.year;

    this.annualService.createAnnualSale(this.config.data.user.id, annualSale).subscribe((a: AnnualSale) => this.ref.close(a));
  }

  public cancel() {
    this.ref.close();
  }
  public onChangeYear() {
    console.log(this.year);
  }

}
