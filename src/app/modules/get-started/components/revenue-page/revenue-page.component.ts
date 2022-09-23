import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-revenue-page',
  templateUrl: './revenue-page.component.html',
  styleUrls: ['./revenue-page.component.scss'],
})

export class RevenuePageComponent implements OnInit {

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