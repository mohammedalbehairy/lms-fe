import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsPageComponent } from './loan-details-page.component';

describe('UserErrorComponent', () => {
  let component: LoanDetailsPageComponent;
  let fixture: ComponentFixture<LoanDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
