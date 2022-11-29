import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CodesService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private _httpClient: HttpClient) {}

  loadCode(code: number) {
    console.log('=====CodesService=======loadCode=================');
    
    return this._httpClient.get(
      `${environment.apiUrl}/api/v1/cba/codes/${code}`,
      this.options
    );
  }
}
