import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Stepper from "bs-stepper";
import { FlatpickrOptions } from "ng2-flatpickr";
import { StepperService } from "../../services/stepper.service";


@Component({
  selector: 'app-review-loan-details-page',
  templateUrl: './review-loan-details-page.component.html',
  styleUrls: ['./review-loan-details-page.component.scss'],
})

export class ReviewLoanDetailsPageComponent implements OnInit {

  @Input() stepper:Stepper;

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
    private _stepper: StepperService
  ) {

  }
  ngOnInit(): void {
  }

  horizontalWizardStepperNext() {
    this._stepper.passValue("14");
    this.stepper.next();
  }
  horizontalWizardStepperBack() {
    this._stepper.passValue("13");
    this.stepper.previous();
  }
  openDocumentsPage() {
    this._router.navigate(['dash/documents']);
  }

  modalOpenDefault(modalDefault) {
    this.modalService.open(modalDefault, {
      centered: true
    });
  }

}