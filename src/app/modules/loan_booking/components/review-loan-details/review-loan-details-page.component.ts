import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrOptions } from "ng2-flatpickr";


@Component({
  selector: 'app-review-loan-details-page',
  templateUrl: './review-loan-details-page.component.html',
  styleUrls: ['./review-loan-details-page.component.scss'],
})

export class ReviewLoanDetailsPageComponent implements OnInit {


  public TDNameVar;
  public TDEmailVar;
  public selectBasicLoading = false;
  basicDPdata;
  public data: any;
  check = false;

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
    private modalService: NgbModal,
  ) {

  }
  ngOnInit(): void {
  }

  back() {
    this._router.navigate(['loanbooking/loanterms']);
  }

  next() {
    this._router.navigate(['loanbooking/loanagreement']);
  }

  modalOpenDefault(modalDefault) {
    this.modalService.open(modalDefault, {
      centered: true
    });
  }

}