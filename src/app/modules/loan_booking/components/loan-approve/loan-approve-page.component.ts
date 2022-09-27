import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-loan-approve-page',
  templateUrl: './loan-approve-page.component.html',
  styleUrls: ['./loan-approve-page.component.scss'],
})

export class LoanApprovePageComponent implements OnInit {

  type;
  public basicPwdShow = false;

  constructor(
    private _router: Router,
  ) {

  }
  ngOnInit(): void {
  }
  back() {
    this._router.navigate(['loanbooking/loanagreement']);
  }
  next() {
    this._router.navigate(['dash/welcome']);
  }
}