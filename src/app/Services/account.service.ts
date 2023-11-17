import { Account } from './../Models/account';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
   }

  public getAccountList(): Observable<any[]>{
    return this.http.get<any[]>(this.url + 'allAccounts');
  }
}
