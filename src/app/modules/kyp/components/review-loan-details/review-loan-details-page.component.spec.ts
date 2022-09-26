import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLoanDetailsPageComponent } from './review-loan-details-page.component';

describe('UserErrorComponent', () => {
  let component: ReviewLoanDetailsPageComponent;
  let fixture: ComponentFixture<ReviewLoanDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewLoanDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewLoanDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
