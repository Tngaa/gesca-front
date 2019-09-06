import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonthlySale } from '../models/monthly-sale.model';

@Injectable()
export class MonthlyService {
  constructor(private httpClient: HttpClient) { }

  public createMonthlySale(userId: number, annualSaleId: number, monthlySale: MonthlySale): Observable<MonthlySale> {
    return this.httpClient.post<MonthlySale>(`/users/${userId}/annual-sales/${annualSaleId}/monthly-sales`, monthlySale);
  }

  public updateMonthlySale(userId: number, annualSaleId: number, monthlySale: MonthlySale): Observable<MonthlySale> {
    return this.httpClient.put<MonthlySale>(`/users/${userId}/annual-sales/${annualSaleId}/monthly-sales/${monthlySale.id}`, monthlySale);
  }

  public deleteMonthlySale(userId: number, annualSaleId: number, monthlySaleId: number): Observable<any> {
    return this.httpClient.delete<any>(`/users/${userId}/annual-sales/${annualSaleId}/monthly-sales/${monthlySaleId}`);
  }
}
