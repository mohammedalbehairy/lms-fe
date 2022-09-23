import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanActionPageComponent } from './loan-action-page.component';

describe('UserErrorComponent', () => {
  let component: LoanActionPageComponent;
  let fixture: ComponentFixture<LoanActionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanActionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanActionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
