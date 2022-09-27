import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stepper from "bs-stepper";
import { FlatpickrOptions } from "ng2-flatpickr";
import { StepperService } from "../../services/stepper.service";


@Component({
  selector: 'app-loan-terms-page',
  templateUrl: './loan-terms-page.component.html',
  styleUrls: ['./loan-terms-page.component.scss'],
})

export class LoanTermsPageComponent implements OnInit {

  @Input() stepper:Stepper;

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
    private _stepper: StepperService

  ) {

  }
  ngOnInit(): void {
  }

  horizontalWizardStepperNext() {
    this._stepper.passValue("13");
    this.stepper.next();
  }
  horizontalWizardStepperBack() {
    this._stepper.passValue("12");
    this.stepper.previous();
  }
  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }
}