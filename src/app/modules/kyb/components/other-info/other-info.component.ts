import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { KybService } from '../../services/kyb.service';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OtherInfoComponent implements OnInit {
  public infoForm: UntypedFormGroup;
  public submitted = false;
  public loading = false;

  constructor(
    private _router: Router,
    private formBuilder: UntypedFormBuilder,
    private _kybService: KybService
  ) {}
  ngOnInit(): void {
    this.initForm();

    this.loadData();
  }

  initForm() {
    // Reactive form initialization
    this.infoForm = this.formBuilder.group({
      experienceCount: [null, Validators.required],
      employeesCount: [null, Validators.required],
      websiteURL: ['', Validators.required],
      officeType: ['owned', Validators.required],
    });
  }

  loadData() {}

  onSubmit() {
    console.log('=-=-=-=-=-=-=--', this.infoForm);

    this.submitted = true;

    // stop here if form is invalid
    if (this.infoForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kybService.setData(data).subscribe(
      (res) => {
        console.log(res);

        this._router.navigate(['kyb/ecommerce']);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getCleanValue() {
    return {
      financialInformation: {
        ...this.infoForm.value,
      },
    };
  }

  get f() {
    return this.infoForm.controls;
  }

  back() {
    this._router.navigate(['kyb/financialinfo']);
  }
}
