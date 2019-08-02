import { Component, OnInit, Input } from '@angular/core';
import { AnnualSale } from '../shared/models/annual-sale.model';
import { MonthEnum } from '../shared/enums/month.enum';
import { MonthlySale } from '../shared/models/monthly-sale.model';

@Component({
  selector: 'app-annual-sale',
  templateUrl: './annual-sale.component.html',
  styleUrls: ['./annual-sale.component.scss']
})
export class AnnualSaleComponent implements OnInit {

  public MonthEnum: typeof MonthEnum = MonthEnum;
  public months: string[];

  @Input()
  public annualSale: AnnualSale;

  constructor() { }

  ngOnInit() {
    this.months = Object.keys(MonthEnum).filter(key => !isNaN(Number(MonthEnum[key])));
  }

  public getMonthlySale(month: string): MonthlySale {
    // MonthEnum[0] -> January
    // MonthEnum['January'] -> 0
    return this.annualSale.monthlySales.find((monthlySale: MonthlySale) => monthlySale.month === MonthEnum[month]);
  }
}
