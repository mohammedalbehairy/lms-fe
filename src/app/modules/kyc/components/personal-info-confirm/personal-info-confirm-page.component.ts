import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { KycService } from '../../services/kyc.service';

@Component({
  selector: 'app-personal-info-confirm-page',
  templateUrl: './personal-info-confirm-page.component.html',
  styleUrls: ['./personal-info-confirm-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalInfoConfirmPageComponent implements OnInit {
  public personalInfoForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

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
    this.personalInfoForm = this.formBuilder.group({
      authorizedConsent: ['true'],
    });
  }

  addControls() {
    this.personalInfoForm.addControl(
      'fullName',
      this.formBuilder.control('', Validators.required)
    );
    this.personalInfoForm.addControl(
      'mobileNumber',
      this.formBuilder.control('', Validators.required)
    );
    this.personalInfoForm.addControl(
      'email',
      this.formBuilder.control('', [Validators.required, Validators.email])
    );
  }

  removeControls() {
    this.personalInfoForm.removeControl('fullName');
    this.personalInfoForm.removeControl('mobileNumber');
    this.personalInfoForm.removeControl('email');
  }

  changeAuth(value) {
    value ? this.removeControls() : this.addControls();
  }

  loadData() {}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.personalInfoForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kycService.setConsent(data).subscribe(
      (res) => {
        this._router.navigate(['/kyc/identifcation']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      ...this.personalInfoForm.value,
      authorizedConsent: false,
    };
  }

  get f() {
    return this.personalInfoForm.controls;
  }

  back() {
    this._router.navigate(['/kyb/uploaddocs']);
  }
}
