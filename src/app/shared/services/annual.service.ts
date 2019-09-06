import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnnualSale } from '../models/annual-sale.model';
import { Observable } from 'rxjs';


@Injectable()
export class AnnualService {
  constructor(private httpClient: HttpClient) { }

  public createAnnualSale(userId: number, annualSale: AnnualSale): Observable<AnnualSale> {
    return this.httpClient.post<AnnualSale>(`/users/${userId}/annual-sales`, annualSale);
  }
  public getAnnualSale(userId: number, annualSaleId: number): Observable<AnnualSale> {
    return this.httpClient.get<AnnualSale>(`/users/${userId}/annual-sales/${annualSaleId}`);
  }

  public deleteAnnualSale(userId: number, annualSaleId: number): Observable<any> {
    return this.httpClient.delete<any>(`/users/${userId}/annual-sales/${annualSaleId}`);
  }

}
