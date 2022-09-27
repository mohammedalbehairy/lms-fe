import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialApproveComponent } from './initial-approve.component';

describe('InitialApproveComponent', () => {
  let component: InitialApproveComponent;
  let fixture: ComponentFixture<InitialApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
