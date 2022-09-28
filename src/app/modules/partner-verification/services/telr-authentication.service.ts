import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TelrAuthenticationService {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  authTelr(username: string, password: string) {
    console.log('=====authTelr=====');
    
    return this._httpClient.post(
      `${environment.apiUrl}/api/v1/cba/telr/processor`,
      {
        username,
        password,
        data_provider: 'telr',
      }
    );
  }

  getBusinessData() {}
}
