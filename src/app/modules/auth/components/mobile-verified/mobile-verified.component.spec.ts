import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVerifiedComponent } from './mobile-verified.component';

describe('MobileVerifiedComponent', () => {
  let component: MobileVerifiedComponent;
  let fixture: ComponentFixture<MobileVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileVerifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
