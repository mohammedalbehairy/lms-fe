import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  constructor(private _http: HttpClient) {}

  setConsent(body) {
    return this._http.post(
      `${environment.apiUrl}/api/v1/crm/kyb/consents`,
      body
    );
  }
}
