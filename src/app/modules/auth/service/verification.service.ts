import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  constructor(private _http: HttpClient) {}

  sendOtp(phoneNumber: string) {
    return this._http.post(
      `${environment.apiUrl}/api/unsecured/v1/otp/generate`,
      {
        phoneNumber,
      }
    );
  }
}
