import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper-page.component.html',
  styleUrls: ['./stepper-page.component.scss'],
})

export class StepperPageComponent implements OnInit {

  @Input() index: any;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() nextTitle: string;
  @Input() isHidden: boolean;
  


  constructor(
    private _router: Router,
    private modalService: NgbModal,

  ) {

  }
  ngOnInit(): void {
  }
  back() {
    this._router.navigate(['dash/welcome']);
  }
  next() {
    this._router.navigate(['dash/revenue']);
  }

  modalOpenDefault(modalDefault) {
    this.modalService.open(modalDefault, {
      centered: true,
      size: 'lg'
    });
  }
}