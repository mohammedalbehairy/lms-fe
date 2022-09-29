import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import moment from 'moment';
import { KybService } from '../../services/kyb.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoComponent implements OnInit {
  public incorporationDateOptions: any = {
    altInput: true,
    defaultDate: ['2010-05-23'],
    altFormat: 'j/m/Y',
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

    this.loadTelrData();
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

  loadMagnatiData() {
    this._kybService.loadMagnatiBD().subscribe(
      (res: any) => {
        console.log(res);
        this.patchFormValues(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadTelrData() {
    this._kybService.loadTelrBD().subscribe(
      (res: any) => {
        console.log(res);
        this.patchFormValues(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  patchFormValues(data) {
    this.f.businessName.setValue(data['b-name']);
    this.f.incorporationType.setValue(29);
    this.f.tradeLicenseNumber.setValue(data['trade-ln']);
  }

  onSubmit() {
    console.log('=-=-=-=-=-=-=--', this.businessInfoForm);

    this.submitted = true;

    // stop here if form is invalid
    if (this.businessInfoForm.invalid) {
      return;
    }
    this.loading = true;
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
