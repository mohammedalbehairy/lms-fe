import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AECBConsentFormComponent } from './aecb-consent-form.component';

describe('MobileVerifiedComponent', () => {
  let component: AECBConsentFormComponent;
  let fixture: ComponentFixture<AECBConsentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AECBConsentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AECBConsentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
