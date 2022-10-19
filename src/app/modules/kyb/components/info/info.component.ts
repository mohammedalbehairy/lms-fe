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
import { UserStatusService } from '@core/services/user-status/user-status.service';
import moment from 'moment';
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
    private changeDetector: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.initForm();

    this.loadDataFromProvider();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
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

  loadMagnatiData() {
    console.log('============loadMagnatiData==============');

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
    this.incDate = data.openDate;
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

  next() {
    this._router.navigate(['kyb/businessaddress']);
  }
}
