import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { KybService } from '../../services/kyb.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddressComponent implements OnInit {
  public incorporationDateOptions: FlatpickrOptions = {
    altInput: true,
  };

  public businessAddressForm: UntypedFormGroup;
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
    this.businessAddressForm = this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: [null, Validators.required],
      city: [null, Validators.required],
      postCode: [null],
      country: [null, Validators.required],
      jurisdiction: ['mainland-ded'],
      landLineNumber: ['', Validators.required],
    });
  }

  loadData() {}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.businessAddressForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kybService.setData(data).subscribe(
      (res) => {
        this._router.navigate(['/kyb/financialinfo']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      businessAddress: {
        ...this.businessAddressForm.value,
      },
    };
  }

  get f() {
    return this.businessAddressForm.controls;
  }

  back() {
    this._router.navigate(['kyb/businessdetails']);
  }
}
