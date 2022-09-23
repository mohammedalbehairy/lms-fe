import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stepper from "bs-stepper";
import { FlatpickrOptions } from "ng2-flatpickr";


@Component({
  selector: 'app-business-details-address-page',
  templateUrl: './business-details-address-page.component.html',
  styleUrls: ['./business-details-address-page.component.scss'],
})

export class BusinessDetailsAddressPageComponent implements OnInit {

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

  horizontalWizardStepperNext() {
    this.stepper.next();
  }
  horizontalWizardStepperBack() {
    this.stepper.previous();
  }
  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }
}