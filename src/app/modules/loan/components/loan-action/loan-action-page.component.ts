import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-loan-action-page',
  templateUrl: './loan-action-page.component.html',
  styleUrls: ['./loan-action-page.component.scss'],
})

export class LoanActionPageComponent implements OnInit {

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
    this._router.navigate(['loan/loanaction']);
  }
}