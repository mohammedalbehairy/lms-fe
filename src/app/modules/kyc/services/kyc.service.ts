import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KycService {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  setConsent(body) {
    return this._httpClient.post(
      `${environment.apiUrl}/api/v1/crm/kyc/consents`,
      body
    );
  }

  setData(body) {
    return this._httpClient.post(`${environment.apiUrl}/api/v1/crm/kyc`, body);
  }
}
