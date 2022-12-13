import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CodesService } from '@core/services/codes.service';
import moment from 'moment';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { KycService } from '../../services/kyc.service';

@Component({
  selector: 'app-shareholder-information-page',
  templateUrl: './shareholder-information-page.component.html',
  styleUrls: ['./shareholder-information-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShareholderInformationPageComponent
  implements OnInit, AfterContentChecked
{
  public dateOfBirthOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
  };

  public birthDate = null;

  public shareHolderForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

  public countries = [];

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _kycService: KycService,
    private _codesService: CodesService,
    private changeDetector: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.initForm();

    this.loadData();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  initForm() {
    // Reactive form initialization
    this.shareHolderForm = this.formBuilder.group({
      partnerShareholder: [false],
      type: ['company'],
      percentageHoldings: [null, Validators.required],
      partnerName: [null, Validators.required],
      passportNumber: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      gender: ['male'],
      nationality: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
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
            countries: res[0],
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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.shareHolderForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kycService.setData(data).subscribe(
      (res) => {
        this._router.navigate(['/shuftipro/main']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      partnerShareHolder: {
        ...this.shareHolderForm.value,
        dateOfBirth: moment(this.f.dateOfBirth.value[0]).format('DD MMMM YYYY'),
      },
    };
  }

  get f() {
    return this.shareHolderForm.controls;
  }

  back() {
    this._router.navigate(['kyc/uploaddocuments']);
  }
}
