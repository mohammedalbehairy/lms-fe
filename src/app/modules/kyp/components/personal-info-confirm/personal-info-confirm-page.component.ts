import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stepper from "bs-stepper";
import { FlatpickrOptions } from "ng2-flatpickr";
import { StepperService } from "../../services/stepper.service";


@Component({
  selector: 'app-personal-info-confirm-page',
  templateUrl: './personal-info-confirm-page.component.html',
  styleUrls: ['./personal-info-confirm-page.component.scss'],
})

export class PersonalInfoConfirmPageComponent implements OnInit {

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
    this._stepper.passValue("7");
    this.stepper.next();
  }
  horizontalWizardStepperBack() {
    this._stepper.passValue("5");
    this.stepper.previous();
  }
  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }
}