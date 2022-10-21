import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialApprovalComponent } from './initial-approval.component';

describe('InitialApprovalComponent', () => {
  let component: InitialApprovalComponent;
  let fixture: ComponentFixture<InitialApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
