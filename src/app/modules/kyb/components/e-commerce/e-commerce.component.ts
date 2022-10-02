import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { KybService } from '../../services/kyb.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ECommerceComponent implements OnInit {
  public ecommerceForm: UntypedFormGroup;
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
    this.ecommerceForm = this.formBuilder.group({
      averageMonthlyValueOfInventoryHeld: [null, Validators.required],
      currentRating: [null, Validators.required],
    });
  }

  loadData() {}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ecommerceForm.invalid) {
      return;
    }
    this.loading = true;
    let data = this.getCleanValue();

    this._kybService.setData(data).subscribe(
      (res) => {
        this._router.navigate(['kyb/uploaddocs']);
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
        ...this.ecommerceForm.value,
      },
    };
  }

  get f() {
    return this.ecommerceForm.controls;
  }

  back() {
    this._router.navigate(['kyb/otherinfo']);
  }
}
