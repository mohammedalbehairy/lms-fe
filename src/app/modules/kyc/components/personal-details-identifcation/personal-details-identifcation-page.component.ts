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
  selector: 'personal-details-identifcation-page',
  templateUrl: './personal-details-identifcation-page.component.html',
  styleUrls: ['./personal-details-identifcation-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalDetailsIdentifcationPageComponent
  implements OnInit, AfterContentChecked
{
  public emiratesIDExpiryDateOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
    minDate: moment().add(1, 'days').format("YYYY-MM-DD"),
  };
  public dateOfBirthOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
  };

  public yearsInUAEOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
  };

  public emirateExpDate = '2010-05-11';
  public birthDate = '2010-05-11';
  public yearsInUAEDate = '2010-05-11';

  public infoForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

  public nationalities = [];

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
    this.infoForm = this.formBuilder.group({
      emiratesID: [null, Validators.required],
      emiratesIDExpiryDate: [null, Validators.required],
      fullName: [null, Validators.required],
      nationality: ['', Validators.required],
      passportNumber: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      yearsInUAE: [null, Validators.required],
      residencyStatus: ['resident', Validators.required],
      gender: ['male', Validators.required],
      usCitizin: ['false', Validators.required],
    });
  }

  loadData() {
    this.getCodes();
  }

  getCodes() {
    console.log('-------------getCodes----------------');

    return forkJoin([this._codesService.loadCode(28)])
      .pipe(
        map((res) => {
          return {
            nationalities: res[0],
          };
        })
      )
      .subscribe(
        (res: any) => {
          this.nationalities = res.nationalities;
        },
        (err) => {
          console.log(err);
        }
      );
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
        this._router.navigate(['kyc/contactdetails']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      personDetails: {
        ...this.infoForm.value,
        emiratesIDExpiryDate: moment(
          this.f.emiratesIDExpiryDate.value[0]
        ).format('DD MMMM YYYY'),
        dateOfBirth: moment(this.f.dateOfBirth.value[0]).format('DD-MM-YYYY'), // TODO: farooq plaiming
      },
    };
  }

  get f() {
    return this.infoForm.controls;
  }

  back() {
    this._router.navigate(['kyc/personalinfo']);
  }
}
