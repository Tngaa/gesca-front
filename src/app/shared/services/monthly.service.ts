import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class MonthlyService {
  constructor(private httpClient: HttpClient) { }

  // public getUsers(): Observable<User[]> {
  //   return this.httpClient.get<User[]>('/gesca/users/');
  // }
}
