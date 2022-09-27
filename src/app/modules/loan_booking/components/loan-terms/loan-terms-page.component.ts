import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlatpickrOptions } from "ng2-flatpickr";


@Component({
  selector: 'app-loan-terms-page',
  templateUrl: './loan-terms-page.component.html',
  styleUrls: ['./loan-terms-page.component.scss'],
})

export class LoanTermsPageComponent implements OnInit {


  public TDNameVar;
  public TDEmailVar;
  public selectBasicLoading = false;
  basicDPdata;
  public data: any;


  public sliderPriceValue = [1, 100];

  public selectBasic = [
    { name: 'UK' },
    { name: 'USA' },
    { name: 'Spain' },
    { name: 'France' },
    { name: 'Italy' },
    { name: 'Australia' }
  ];

  public sliderSingleHandelValue: number[] = [20, 60];
  public sliderStepsValue: number[] = [10, 80];


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
    this._router.navigate(['kyc/addshareholder']);
  }

  next() {
    this._router.navigate(['loanbooking/reviewloan']);
  }
}