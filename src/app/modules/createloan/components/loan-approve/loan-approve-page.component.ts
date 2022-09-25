import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stepper from "bs-stepper";


@Component({
  selector: 'app-loan-approve-page',
  templateUrl: './loan-approve-page.component.html',
  styleUrls: ['./loan-approve-page.component.scss'],
})

export class LoanApprovePageComponent implements OnInit {

  type;
  public basicPwdShow = false;

  @Input() stepper:Stepper;


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