import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stepper from "bs-stepper";
import { FlatpickrOptions } from "ng2-flatpickr";


@Component({
  selector: 'app-review-loan-agreement-page',
  templateUrl: './review-loan-agreement-page.component.html',
  styleUrls: ['./review-loan-agreement-page.component.scss'],
})

export class ReviewLoanAgreementPageComponent implements OnInit {

  @Input() stepper:Stepper;

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
    this._router.navigate(['loanbooking/reviewloan']);
  }

  next() {
    this._router.navigate(['loanbooking/loanapprove']);
  }
}