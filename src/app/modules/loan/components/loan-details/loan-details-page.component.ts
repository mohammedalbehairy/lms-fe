import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-loan-details-page',
  templateUrl: './loan-details-page.component.html',
  styleUrls: ['./loan-details-page.component.scss'],
})

export class LoanDetailsPageComponent implements OnInit {

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
    this._router.navigate(['dash/revenuelogin']);
  }
}