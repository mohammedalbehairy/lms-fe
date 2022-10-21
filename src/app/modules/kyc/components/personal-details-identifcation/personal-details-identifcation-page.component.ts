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
import moment from 'moment';
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

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _kycService: KycService,
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
      nationality: [null, Validators.required],
      passportNumber: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      yearsInUAE: [null, Validators.required],
      residencyStatus: ['resident', Validators.required],
      gender: ['male', Validators.required],
      usCitizin: ['false', Validators.required],
    });
  }

  loadData() {}

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
        yearsInUAE: moment(this.f.yearsInUAE.value[0]).format('DD MMMM YYYY'),
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
