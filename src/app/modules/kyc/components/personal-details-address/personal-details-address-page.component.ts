import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CodesService } from '@core/services/codes.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { KycService } from '../../services/kyc.service';

@Component({
  selector: 'app-personal-details-address-page',
  templateUrl: './personal-details-address-page.component.html',
  styleUrls: ['./personal-details-address-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalDetailsAddressPageComponent implements OnInit {
  public infoForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

  public countries = [];
  public cities = [];

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _codesService: CodesService,
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
      addressLine2: [null],
      addressLine3: [null],
      city: ['', Validators.required],
      postCode: [null],
      countryId: ['', Validators.required],
    });
  }

  loadData() {
    this.getCodes();
  }

  getCodes() {
    return forkJoin([this._codesService.loadCode(28)])
      .pipe(
        map((res) => {
          return {
            countries: (res[0] as any[]).filter((c) => c.active == true),
          };
        })
      )
      .subscribe(
        (res: any) => {
          this.countries = res.countries;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getCities(code: number) {
    return this._codesService
      .loadCode(code)
      .pipe(
        map((res) => {
          return {
            cities: res,
          };
        })
      )
      .subscribe(
        (res: any) => {
          this.cities = res.cities;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onCountryChange(event) {
    let val = event ? event.target.value : '';

     // get egypt cities 348
    // get UAE cities 525

    val == 348
      ? this.getCities(52)
      : val == 525
      ? this.getCities(51)
      : (this.cities = []);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.infoForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kycService.setData(data).subscribe(
      (res) => {
        this._router.navigate(['kyc/homeaddress']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      uaeAddress: {
        ...this.infoForm.value,
      },
    };
  }

  get f() {
    return this.infoForm.controls;
  }

  back() {
    this._router.navigate(['kyc/identifcation']);
  }
}
