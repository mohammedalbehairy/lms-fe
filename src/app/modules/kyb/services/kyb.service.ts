import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KybService {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  setData(body) {
    return this._httpClient.post(`${environment.apiUrl}/api/v1/crm/kyb`, body);
  }

  loadMagnatiBD() {
    return this._httpClient.get(`${environment.apiUrl}/api/v1/cba/magnati`);
  }

  loadTelrBD() {
    return this._httpClient.get(
      `${environment.apiUrl}/api/v1/cba/telr`,
      this.options
    );
  }
}
