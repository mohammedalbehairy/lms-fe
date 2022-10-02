import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper-page.component.html',
  styleUrls: ['./stepper-page.component.scss'],
})
export class StepperPageComponent implements OnInit {
  @Input() headerSubTitle: string;
  @Input() headerTitle: string;
  @Input() index: any;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() nextTitle: string;
  @Input() isHidden: boolean;
  @Input() prevPageURL: string;

  constructor(private _router: Router, private modalService: NgbModal) {}
  ngOnInit(): void {}

  back() {
    this._router.navigate([this.prevPageURL]);
  }

  //TODO: ask about it but i think it will not be used as user should fill the current step first
  next() {
    // this._router.navigate(['dash/revenue']);
  }

  modalOpenDefault(modalDefault) {
    this.modalService.open(modalDefault, {
      centered: true,
      size: 'lg',
    });
  }
}
