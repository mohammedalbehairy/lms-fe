import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { KycService } from '../../services/kyc.service';

@Component({
  selector: 'app-personal-details-home-address-page',
  templateUrl: './personal-details-home-address-page.component.html',
  styleUrls: ['./personal-details-home-address-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalDetailsHomeAddressPageComponent implements OnInit {
  public infoForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _kycService: KycService
  ) {}
  ngOnInit(): void {
    this.initForm();

    this.loadData();
  }

  initForm() {
    // Reactive form initialization
    this.infoForm = this.formBuilder.group({
      addressLine1: [null, Validators.required],
      addressLine2: [null, Validators.required],
      city: [null, Validators.required],
      postCode: [null],
      country: [null, Validators.required],
      landLineNumber: [null, Validators.required],
    });
  }

  loadData() {}

  onSubmit() {
    console.log('=-=-=-=-=-=-=--', this.infoForm);

    this.submitted = true;

    // stop here if form is invalid
    if (this.infoForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kycService.setData(data).subscribe(
      (res) => {
        console.log(res);

        this._router.navigate(['kyc/uploaddocuments']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      homeAddress: {
        ...this.infoForm.value,
      },
    };
  }

  get f() {
    return this.infoForm.controls;
  }

  back() {
    this._router.navigate(['kyc/contactdetails']);
  }
}
