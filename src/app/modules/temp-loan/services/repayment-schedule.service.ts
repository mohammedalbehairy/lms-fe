import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepaymentScheduleService {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  loadRepaymentSchedule(parameters: any) {
    let params = new HttpParams();
    params = params.append('loanAmount', parameters.loanAmount);
    params = params.append('loanTerm', parameters.loanTerm);
    return this._httpClient.post(
      `${environment.apiUrl}/api/v1/cba/repayment-schedule/1`,
      {},
      { ...this.options, params: params }
    );
  }

  getRepaymentSchedule(id) {
    return this._httpClient.get(
      `${environment.apiUrl}/api/v1/cba/repayment-schedule/${id}`,
      this.options
    );
  }
}
