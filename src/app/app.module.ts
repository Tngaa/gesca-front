import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, DialogService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { AnnualSaleDialogComponent } from './annual-sale/annual-sale-dialog/annual-sale-dialog.component';
import { AnnualSaleComponent } from './annual-sale/annual-sale.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthlySaleDialogComponent } from './monthly-sale/monthly-sale-dialog/monthly-sale-dialog.component';
import { MonthlySaleComponent } from './monthly-sale/monthly-sale.component';
import { PrimengModule } from './shared/primeng.module';
import { AnnualService } from './shared/services/annual.service';
import { MonthlyService } from './shared/services/monthly.service';
import { UserService } from './shared/services/user.service';





@NgModule({
  declarations: [AppComponent, AnnualSaleComponent, AnnualSaleDialogComponent, MonthlySaleComponent, MonthlySaleDialogComponent],
  entryComponents: [
    AnnualSaleDialogComponent, MonthlySaleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule, TableModule, ConfirmDialogModule
  ],
  providers: [
    UserService, MonthlyService, AnnualService, DialogService, ConfirmationService, MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
