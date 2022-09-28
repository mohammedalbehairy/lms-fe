import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelrLoginComponent } from './telr-login.component';

describe('TelrLoginComponent', () => {
  let component: TelrLoginComponent;
  let fixture: ComponentFixture<TelrLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelrLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
