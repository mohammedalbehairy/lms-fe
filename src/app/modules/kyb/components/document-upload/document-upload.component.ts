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
import { KybService } from '../../services/kyb.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DocumentUploadComponent implements OnInit, AfterContentChecked {
  public tradeLicenseExpiryDateOptions: any = {
    altInput: true,
    altFormat: 'j/m/Y',
    minDate: moment().add(1, 'days').format("YYYY-MM-DD"),
  };
  public expiryDate: any = {
    altInput: true,
    altFormat: 'j/m/Y',
    minDate: moment().add(1, 'days').format("YYYY-MM-DD"),
  };
  public tradeLicenseExpDate = '2010-05-11';
  public expDate = '2010-05-11';

  public docsForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;
  public image1 = '';

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _kybService: KybService,
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
      tradeLicenseFile: [null, Validators.required],
      tradeLicenseExpiryDate: [null, Validators.required],
      moa: [null, Validators.required],
      bankStatementFromTo: [null],
      ejariOrLeaseAgreement: [null, Validators.required],
      expiryDate: [null, Validators.required],
      vatForm: [null, Validators.required],
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

    this._kybService.setData(data).subscribe(
      (res) => {
        this._router.navigate(['kyc/personalinfo']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      businessDocument: {
        ...this.docsForm.value,
        tradeLicenseExpiryDate: moment(
          this.f.tradeLicenseExpiryDate.value[0]
        ).format('DD MMMM YYYY'),
        expiryDate: moment(this.f.expiryDate.value[0]).format('DD MMMM YYYY'),
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
    this._router.navigate(['kyb/ecommerce']);
  }
}
