import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFinalComponent } from './loan-final.component';

describe('LoanFinalComponent', () => {
  let component: LoanFinalComponent;
  let fixture: ComponentFixture<LoanFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
