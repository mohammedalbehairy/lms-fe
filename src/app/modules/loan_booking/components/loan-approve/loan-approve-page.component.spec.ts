import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApprovePageComponent } from './loan-approve-page.component';

describe('UserErrorComponent', () => {
  let component: LoanApprovePageComponent;
  let fixture: ComponentFixture<LoanApprovePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApprovePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanApprovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
