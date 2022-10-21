import { SharedDataService } from './../../../../../@core/services/shared-data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ShuftiproService } from '../../services/shuftipro.service';

@Component({
  selector: 'app-data-approve',
  templateUrl: './data-approve.component.html',
  styleUrls: ['./data-approve.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DataApproveComponent implements OnInit {
  public shuftiproForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;
  public savedData = undefined;
  public noData = false;

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _sharedDataService: SharedDataService,
    private _shuftiproService: ShuftiproService
  ) {}
  ngOnInit(): void {
    this.initForm();

    this.checkRegData();

    this.getSavedData();
    this.setFormData();
  }

  initForm() {
    // Reactive form initialization
    this.shuftiproForm = this.formBuilder.group({
      first_name: [null, Validators.required],
      middle_name: [null, Validators.required],
      last_name: [null, Validators.required],
      dob: [null, Validators.required],
      expiry_date: [null, Validators.required],
      issue_date: [null, Validators.required],

      gender: [null, Validators.required],
      address: [null, Validators.required],
      country: [null, Validators.required],
      document_type: [null, Validators.required],
      document_country: [null, Validators.required],
      document_number_native: [null, Validators.required],
      document_official_name: [null, Validators.required],
    });
  }

  onSubmit() {}

  checkRegData() {
    this.noData =
      Object.keys(this._sharedDataService.shuftiProData).length === 0;
  }

  getSavedData() {
    this.savedData = this._sharedDataService.shuftiProData;
  }

  setFormData() {
    if (this.noData) {
      return;
    }
    this.shuftiproForm.patchValue({
      first_name: this.savedData.verification_data.document.name.first_name,
      middle_name: this.savedData.verification_data.document.name.middle_name,
      last_name: this.savedData.verification_data.document.name.last_name,
      dob: this.savedData.verification_data.document.dob,
      expiry_date: this.savedData.verification_data.document.expiry_date,

      gender: this.savedData.additional_data.document.proof.gender,
      address: this.savedData.additional_data.document.proof.address,
      country: this.savedData.additional_data.document.proof.country,
      document_type:
        this.savedData.additional_data.document.proof.document_type,
      document_country:
        this.savedData.additional_data.document.proof.document_country,
      document_number_native:
        this.savedData.additional_data.document.proof.document_number_native,
      document_official_name:
        this.savedData.additional_data.document.proof.document_official_name,
    });
  }

  get f() {
    return this.shuftiproForm.controls;
  }

  next() {
    this._router.navigate(['/loans/initial-approval']);
  }

  back() {
    this._router.navigate(['shuftipro/main']);
  }
}
