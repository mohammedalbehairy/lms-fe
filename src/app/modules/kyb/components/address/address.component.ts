import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CodesService } from '@core/services/codes.service';
import { UserStatusService } from '@core/services/user-status/user-status.service';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
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

  public countries = [];
  public cities = [];
  public alertClose = false;

  constructor(
    private _router: Router,
    private _userStatusService: UserStatusService,
    private formBuilder: UntypedFormBuilder,
    private _codesService: CodesService,
    private _kybService: KybService
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.getCodes();
    this.loadDataFromProvider();
  }

  initForm() {
    // Reactive form initialization
    this.businessAddressForm = this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: [null],
      city: ['', Validators.required],
      postCode: [null],
      countryId: ['', Validators.required],
      jurisdiction: ['mainland-ded'],
      landLineNumber: [''],
      dataCorrect: ['true', Validators.required],
      comment: [''],
    });
  }

  loadDataFromProvider() {
    this._userStatusService.getStepperStatus().subscribe(
      (res: any[]) => {
        let providerStep = res.find(
          (s) => s.clientRegistrationStepper_cd_stepper_code == 941
        );
        providerStep ? this.loadMagnatiData() : this.loadTelrData();
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

  getCodes() {
    console.log('-------------getCodes----------------');

    return forkJoin([
      this._codesService.loadCode(28),
      this._codesService.loadCode(287),
    ])
      .pipe(
        map((res) => {
          return {
            countries: res[0],
            cities: res[1],
          };
        })
      )
      .subscribe(
        (res: any) => {
          this.countries = res.countries;
          this.cities = res.cities;
        },
        (err) => {
          console.log(err);
        }
      );
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

  get dataCorrect() {
    return this.businessAddressForm.controls['dataCorrect'].value;
  }

  back() {
    this._router.navigate(['kyb/businessdetails']);
  }
}
