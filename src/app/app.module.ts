import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { PrimengModule } from './shared/primeng.module';
import { TableModule } from 'primeng/table';
import { AnnualSaleComponent } from './annual-sale/annual-sale.component';
import { MonthlyService } from './shared/services/monthly.service';

@NgModule({
  declarations: [AppComponent, AnnualSaleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule, TableModule
  ],
  providers: [
    UserService, MonthlyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
