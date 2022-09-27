import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLoanAgreementPageComponent } from './review-loan-agreement-page.component';

describe('UserErrorComponent', () => {
  let component: ReviewLoanAgreementPageComponent;
  let fixture: ComponentFixture<ReviewLoanAgreementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewLoanAgreementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewLoanAgreementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
