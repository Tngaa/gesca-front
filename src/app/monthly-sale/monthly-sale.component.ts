import { Component, OnInit, Input } from '@angular/core';
import { MonthlySale } from '../shared/models/monthly-sale.model';

@Component({
  selector: 'app-monthly-sale',
  templateUrl: './monthly-sale.component.html',
  styleUrls: ['./monthly-sale.component.scss']
})
export class MonthlySaleComponent implements OnInit {

  @Input()
  public monthlySale: MonthlySale;

  constructor() { }

  ngOnInit() {
  }

}
