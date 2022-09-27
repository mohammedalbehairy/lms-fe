import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RedirectionService {
  constructor(private _http: HttpClient) {}

  getStepsStatus() {
    return this._http.get(
      `${environment.apiUrl}/api/v1/crm/kyb/steppers`
    );
  }
}
