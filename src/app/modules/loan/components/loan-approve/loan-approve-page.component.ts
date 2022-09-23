import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { colors } from 'app/colors.const';
import { ChartOptions2 } from "app/main/charts-and-maps/charts/apex/apex.component";

@Component({
  selector: 'app-loan-approve-page',
  templateUrl: './loan-approve-page.component.html',
  styleUrls: ['./loan-approve-page.component.scss'],
})

export class LoanApprovePageComponent implements OnInit {

  type;

  constructor(
    private _router: Router,
  ) {

  }
  ngOnInit(): void {

  }
  back() {
    this._router.navigate(['dash/documents']);
  }
  next() {
    this._router.navigate(['loan/loandetails']);
  }
}