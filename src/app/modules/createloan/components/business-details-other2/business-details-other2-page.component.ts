import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stepper from "bs-stepper";
import { FlatpickrOptions } from "ng2-flatpickr";
import { StepperService } from "../../services/stepper.service";


@Component({
  selector: 'app-business-details-other2-page',
  templateUrl: './business-details-other2-page.component.html',
  styleUrls: ['./business-details-other2-page.component.scss'],
})

export class BusinessDetailsOther2PageComponent implements OnInit {

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
    private _stepper: StepperService
  ) {

  }
  ngOnInit(): void {
  }

  horizontalWizardStepperNext() {
    this._stepper.passValue("6");
    this.stepper.next();
  }
  horizontalWizardStepperBack() {
    this._stepper.passValue("4");
    this.stepper.previous();
  }
  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }
}