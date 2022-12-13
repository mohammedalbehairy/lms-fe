import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RedirectionService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private _http: HttpClient) {}

  getStepsStatus() {
    return this._http.get(`${environment.apiUrl}/api/v1/crm/kyb/steppers`);
  }

  getAppliedLoans() {
    return this._http.get(`${environment.apiUrl}/api/v1/cba/loan`,this.options);
  }
}
