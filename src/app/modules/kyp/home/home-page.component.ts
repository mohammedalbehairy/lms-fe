import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Stepper from "bs-stepper";
import { FlatpickrOptions } from "ng2-flatpickr";
import { StepperService } from "../services/stepper.service";


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


  public step = 1;

  constructor(
    private _router: Router,
    private _stepper : StepperService,
    private modalService: NgbModal,

  ) {

  }
  ngOnInit(): void {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});
    this._stepper.step.subscribe(
      data => {
        console.log(data);
        this.step = data;
      }
    )
  }

  ngOnDestroy(){
    // this._stepper.step.unsubscribe();
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

  modalOpenDefault(modalDefault) {
    this.modalService.open(modalDefault, {
      centered: true,
      size: 'lg'
    });
  }
}