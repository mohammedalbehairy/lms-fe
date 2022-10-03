import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserStatusService {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  getStepperStatus() {
    return this._httpClient.get(
      `${environment.apiUrl}/api/v1/crm/kyb/steppers`,
      this.options
    );
  }
}
