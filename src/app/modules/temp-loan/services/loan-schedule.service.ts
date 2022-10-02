import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class LoanScheduleService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  rows: any;
  onLoanScheduleChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onLoanScheduleChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getDataTableRows()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    return new Promise((resolve, reject) => {
      this._httpClient
        .post(`${environment.apiUrl}/api/v1/cba/create-loan`, {}, this.options)
        .subscribe((response: any) => {
          this.rows = response;
          this.onLoanScheduleChanged.next(this.rows);
          resolve(this.rows);
        }, reject);
    });
  }

  //TODO: Get from fake DB

  // getDataTableRows(): Promise<any[]> {
  //   return new Promise((resolve, reject) => {
  //     this._httpClient
  //       .get('api/loan-data')
  //       .subscribe((response: any) => {
  //         this.rows = response;
  //         this.onLoanScheduleChanged.next(this.rows);
  //         resolve(this.rows);
  //       }, reject);
  //   });
  // }
}
