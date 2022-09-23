import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stepper from "bs-stepper";
import { FlatpickrOptions } from "ng2-flatpickr";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {
   horizontalWizardStepper: Stepper;
  public data = ["#account-details", "#personal-info"];
  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  constructor(
    private _router: Router,
  ) {

  }
  ngOnInit(): void {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});

  }
  back() {
    this._router.navigate(['dash/welcome']);
  }
  next() {
    this._router.navigate(['dash/revenue']);
  }


  horizontalWizardStepperNext() {
      this.horizontalWizardStepper.next();
    
  }
  /**
   * Horizontal Wizard Stepper Previous
   */
  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }
}