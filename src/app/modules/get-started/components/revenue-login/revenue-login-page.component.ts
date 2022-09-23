import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-revenue-login-page',
  templateUrl: './revenue-login-page.component.html',
  styleUrls: ['./revenue-login-page.component.scss'],
})

export class RevenueLoginPageComponent implements OnInit {

  type;
  public basicPwdShow = false;

  constructor(
    private _router: Router,
  ) {

  }
  ngOnInit(): void {
  }
  back() {
    this._router.navigate(['dash/revenue']);
  }
  next() {
    this._router.navigate(['dash/revenuepreapproval']);
  }
}