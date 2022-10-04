import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  AfterContentChecked,
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
export class BusinessDocumentPassportPageComponent
  implements OnInit, AfterContentChecked
{
  public passportExpiryDateOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
  };

  public emiratesIdExpiryDateOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
  };

  public residenceVisaExpiryDateOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
  };
  public passportExpDate = null;
  public emiratesIdExpDate = null;
  public visaExpDate = null;

  public docsForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;
  public image1 = '';

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
    this.submitted = true;

    // stop here if form is invalid
    if (this.docsForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kycService.setData(data).subscribe(
      (res) => {
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
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
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
