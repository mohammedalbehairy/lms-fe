import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoansService {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  getLoan() {
    return this._httpClient.get(
      `${environment.apiUrl}/api/v1/cba/loan-product`
    );
  }

  applyLoan(parameters: any) {
    let params = new HttpParams();
    params = params.append('loanAmount', parameters.loanAmount);
    params = params.append('loanTerm', parameters.loanTerm);
    return this._httpClient.post(
      `${environment.apiUrl}/api/v1/cba/apply-loan/1`,
      {},
      { ...this.options, params: params }
    );
  }
}
