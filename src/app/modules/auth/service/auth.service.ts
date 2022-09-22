import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(access_token: string, authProvider: string, pass: string) {
    return this._http.post(`${environment.apiUrl}/api/auth/authenticate`, {
      username: access_token,
      authProvider,
      password: pass,
    });
  }

  register(
    fullName: string,
    mobileNo: string,
    authProvider: string,
    pass: string
  ) {
    return this._http.post(
      `${environment.apiUrl}/api/unsecured/v1/registration`,
      {
        fullName,
        mobileNo: mobileNo,
        kycProvider: authProvider,
        accessToken: pass,
      }
    );
  }
}
