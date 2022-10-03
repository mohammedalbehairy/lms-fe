import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserStatusService } from '@core/services/user-status/user-status.service';
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
    private _userStatusService: UserStatusService,
    private formBuilder: UntypedFormBuilder,
    private _kybService: KybService
  ) {}
  ngOnInit(): void {
    this.initForm();

    this.loadDataFromProvider();
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

  loadDataFromProvider() {
    this._userStatusService.getStepperStatus().subscribe(
      (res: any[]) => {
        console.log('========res========', res);
        let providerStep = res.find(
          (s) =>
            s.clientRegistrationStepper_cd_stepper_code == 66 ||
            s.clientRegistrationStepper_cd_stepper_code == 65
        );
        providerStep.clientRegistrationStepper_cd_stepper_code == 65
          ? this.loadMagnatiData()
          : this.loadTelrData();
      },
      (err) => {
        console.log('========err========', err);
      }
    );
  }

  loadTelrData() {
    this._kybService.loadTelrBD().subscribe(
      (res: any) => {
        this.patchFormTelrValues(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  patchFormTelrValues(data) {
    //TODO: add city & country  and  check if phone number will be returned
    // this.f.city.setValue(data['b-address']['city']);
    // this.f.country.setValue(data['b-address']['country']);

    this.f.addressLine1.setValue(data['b-address']['line1']);
    this.f.addressLine2.setValue(data['b-address']['line2']);
    this.f.postCode.setValue(data['b-address']['post-code']);
  }

  loadMagnatiData() {
    this._kybService.loadMagnatiBD().subscribe(
      (res: any) => {
        this.patchFormMagnatiValues(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  patchFormMagnatiValues(data) {
    //TODO: add city & country  and  check if phone number will be returned
    // this.f.city.setValue(data['b-address']['city']);
    // this.f.country.setValue(data['b-address']['country']);
    
    // viCategoryCode
    this.f.addressLine1.setValue(data.addressLine1);
    this.f.addressLine2.setValue(data.secondAddressLine4);
    this.f.landLineNumber.setValue(data.phoneNo);
  }

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
