import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-final',
  templateUrl: './loan-final.component.html',
  styleUrls: ['./loan-final.component.scss'],
})
export class LoanFinalComponent implements OnInit {
  type;
  public basicPwdShow = false;

  constructor(private _router: Router) {}
  ngOnInit(): void {}
  back() {
    this._router.navigate(['dash/revenuelogin']);
  }
  next() {
    this._router.navigate(['dash/welcome']);
  }
}
