import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlatpickrOptions } from "ng2-flatpickr";


@Component({
  selector: 'app-shareholder-information-page',
  templateUrl: './shareholder-information-page.component.html',
  styleUrls: ['./shareholder-information-page.component.scss'],
})

export class ShareholderInformationPageComponent implements OnInit {


  public TDNameVar;
  public TDEmailVar;
  public selectBasicLoading = false;
  basicDPdata;
  public data: any;

  public selectBasic = [
    { name: 'UK' },
    { name: 'USA' },
    { name: 'Spain' },
    { name: 'France' },
    { name: 'Italy' },
    { name: 'Australia' }
  ];


  public basicDateOptions: FlatpickrOptions = {
    altInput: true
  };

  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  constructor(
    private _router: Router,

  ) {

  }
  ngOnInit(): void {
  }

  back() {
    this._router.navigate(['kyc/uploaddocuments']);
  }
  next() {
    this._router.navigate(['loanbooking/loanterms']);
  }
}