import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-revenue-preapprove-page',
  templateUrl: './revenue-preapprove-page.component.html',
  styleUrls: ['./revenue-preapprove-page.component.scss'],
})

export class RevenuePreApprovePageComponent implements OnInit {

  type;
  public basicPwdShow = false;

  constructor(
    private _router: Router,
  ) {

  }
  ngOnInit(): void {
  }
  back() {
    this._router.navigate(['dash/revenuelogin']);
  }
  next() {
    this._router.navigate(['dash/welcome']);
  }
}