import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthUaePassService {
  constructor(private _http: HttpClient) {}

  getTokenUAE_Pass(code: string) {
    const reqBody = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', `${environment.currentUrl}/auth/sign-in-uae-pass`)
      .set('client_id', 'sandbox_stage')
      .set('client_secret', 'sandbox_stage');

    return this._http.post(
      'https://api.lnddo.dev/api/unsecured/v1/registration/uae-pass',
      {
        code,
        redirectUri: `${environment.currentUrl}/auth/home/sign-in-uae-pass`,
      }
    );
  }

  loginUAE_Pass(access_token: string) {
    return this._http.post(`${environment.apiUrl}/api/auth/authenticate`, {
      username: access_token,
      authProvider: 'UAE_PASS',
      password: 'UAE',
    });
  }
}
