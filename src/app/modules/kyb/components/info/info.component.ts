import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IncorporationType } from '@core/data/incorporationType';
import { CodesService } from '@core/services/codes.service';
import { UserStatusService } from '@core/services/user-status/user-status.service';
import moment from 'moment';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { KybService } from '../../services/kyb.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoComponent implements OnInit, AfterContentChecked {
  public incorporationDateOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
  };
  public incorporationType;
  public businessCategory;
  public tradingType;

  public incDate = '2010-05-11';

  public businessInfoForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

  public dataProviderCode = undefined;
  public alertClose = false;
  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _userStatusService: UserStatusService,
    private _kybService: KybService,
    private _codesService: CodesService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCodes();
    this.loadDataFromProvider();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  initForm() {
    // Reactive form initialization
    this.businessInfoForm = this.formBuilder.group({
      businessName: ['', Validators.required],
      incorporationType: ['', Validators.required],
      incorporationDate: [null, Validators.required],
      businessCategory: ['', Validators.required],
      tradingType: ['', Validators.required],
      retailOutletsCount: [null],
      tradeLicenseNumber: [null, Validators.required],
      dataCorrect: ['true', Validators.required],
      comment: [''],
    });
  }

  getCodes() {
    return forkJoin([
      this._codesService.loadCode(17),
      this._codesService.loadCode(24),
      this._codesService.loadCode(16),
    ])
      .pipe(
        map((res) => {
          return {
            businessCategory: res[0],
            tradingType: res[1],
            incorporationType: res[2],
          };
        })
      )
      .subscribe(
        (res) => {
          this.businessCategory = res.businessCategory;
          this.tradingType = res.tradingType;
          this.incorporationType = res.incorporationType;
        },
        (err) => {
          console.log(err);
        }
      );
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

  loadTelrData() {
    console.log('============loadTelrData==============');

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
    // this.f.incorporationType.setValue(29);
    this.incDate = data['incop-date'];
    this.f.businessName.setValue(data['b-name']);
    this.f.tradeLicenseNumber.setValue(data['trade-ln']);
  }

  patchFormMagnatiValues(data) {
    // viCategoryCode
    this.f.businessName.setValue(data.merchantName);
    this.incDate = data.userDate4;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.businessInfoForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kybService.setData(data).subscribe(
      (res) => {
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

  get dataCorrect() {
    return this.businessInfoForm.controls['dataCorrect'].value;
  }

  next() {
    this._router.navigate(['kyb/businessaddress']);
  }
}
