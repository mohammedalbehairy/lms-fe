import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsAddressPageComponent } from './business-details-address-page.component';

describe('UserErrorComponent', () => {
  let component: BusinessDetailsAddressPageComponent;
  let fixture: ComponentFixture<BusinessDetailsAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDetailsAddressPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDetailsAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
