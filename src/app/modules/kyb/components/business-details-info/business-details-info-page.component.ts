import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import moment from 'moment';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { KybService } from '../../services/kyb.service';

@Component({
  selector: 'app-business-details-info-page',
  templateUrl: './business-details-info-page.component.html',
  styleUrls: ['./business-details-info-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BusinessDetailsInfoPageComponent implements OnInit {
  public incorporationDateOptions: FlatpickrOptions = {
    altInput: true,
    // altFormat: 'j/m/Y',
    // dateFormat: 'Y-m-d',
    // defaultDate: '2019-05-01',
  };

  public businessInfoForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _kybService: KybService
  ) {}
  ngOnInit(): void {
    this.initForm();

    this.loadData();
  }

  initForm() {
    // Reactive form initialization
    this.businessInfoForm = this.formBuilder.group({
      businessName: ['', Validators.required],
      incorporationType: [null, Validators.required],
      incorporationDate: [null, Validators.required],
      businessCategory: [null, Validators.required],
      tradingType: [null, Validators.required],
      retailOutletsCount: [null],
      tradeLicenseNumber: ['', Validators.required],
    });
  }

  loadData() {}

  onSubmit() {
    console.log('=-=-=-=-=-=-=--', this.businessInfoForm);

    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.businessInfoForm.invalid) {
      return;
    }
    let data = this.getCleanValue();

    this._kybService.setData(data).subscribe(
      (res) => {
        console.log(res);

        this._router.navigate(['/kyb/businessaddress']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      businessInformation: {
        ...this.businessInfoForm.value,
        incorporationDate: moment(this.f.incorporationDate.value[0]).format(
          'DD MMMM YYYY'
        ),
      },
    };
  }

  get f() {
    return this.businessInfoForm.controls;
  }

  next() {
    this._router.navigate(['kyb/businessaddress']);
  }
}
