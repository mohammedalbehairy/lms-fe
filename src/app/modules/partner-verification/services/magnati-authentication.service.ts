import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MagnatiAuthenticationService {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  authMagnati(token: string) {
    return this._httpClient.post(
      `${environment.apiUrl}/api/v1/cba/magnati/processor`,
      {
        token,
      }
    );
  }

  getBusinessData() {}
}
