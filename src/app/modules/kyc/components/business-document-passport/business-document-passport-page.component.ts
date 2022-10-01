import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
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
  selector: 'app-business-document-passport-page',
  templateUrl: './business-document-passport-page.component.html',
  styleUrls: ['./business-document-passport-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BusinessDocumentPassportPageComponent implements OnInit {
  public passportExpiryDateOptions: any = {
    altInput: true,
    defaultDate: ['2010-05-23'],
    altFormat: 'j/m/Y',
  };

  public emiratesIdExpiryDateOptions: any = {
    altInput: true,
    defaultDate: ['2010-05-23'],
    altFormat: 'j/m/Y',
  };

  public residenceVisaExpiryDateOptions: any = {
    altInput: true,
    defaultDate: ['2010-05-23'],
    altFormat: 'j/m/Y',
  };

  public docsForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;
  public image1 = '';

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
    this.docsForm = this.formBuilder.group({
      passport: [null, Validators.required],
      passportExpiryDate: [null, Validators.required],
      emiratesId: [null, Validators.required],
      emiratesIdExpiryDate: [null, Validators.required],
      residenceVisa: [null, Validators.required],
      residenceVisaExpiryDate: [null, Validators.required],
    });
  }

  loadData() {}

  onSubmit() {
    console.log('=-=-=-=-=-=-=--', this.docsForm);

    this.submitted = true;

    // stop here if form is invalid
    if (this.docsForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kycService.setData(data).subscribe(
      (res) => {
        console.log(res);

        this._router.navigate(['kyc/addshareholder']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      personalDocument: {
        ...this.docsForm.value,
        passportExpiryDate: moment(this.f.passportExpiryDate.value[0]).format(
          'DD MMMM YYYY'
        ),
        emiratesIdExpiryDate: moment(
          this.f.emiratesIdExpiryDate.value[0]
        ).format('DD MMMM YYYY'),
        residenceVisaExpiryDate: moment(
          this.f.residenceVisaExpiryDate.value[0]
        ).format('DD MMMM YYYY'),
      },
    };
  }

  /**
   * Upload Image
   *
   * @param event
   */
  uploadFile(event: any) {
    let inputId = event.target.id;
    let data = null;
    console.log('=====uploadFile=========inputId==============', inputId);

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        console.log(
          '=====uploadFile===onload======inputId========event======',
          event
        );

        data = event.target.result;
        this.f[inputId].setValue(data);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  get f() {
    return this.docsForm.controls;
  }

  back() {
    this._router.navigate(['kyc/homeaddress']);
  }
}
