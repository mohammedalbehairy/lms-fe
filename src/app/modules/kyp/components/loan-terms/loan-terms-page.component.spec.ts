import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTermsPageComponent } from './loan-terms-page.component';

describe('UserErrorComponent', () => {
  let component: LoanTermsPageComponent;
  let fixture: ComponentFixture<LoanTermsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTermsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanTermsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
