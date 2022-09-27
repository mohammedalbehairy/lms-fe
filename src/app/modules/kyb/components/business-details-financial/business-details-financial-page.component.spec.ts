import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsFinancialPageComponent } from './business-details-financial-page.component';

describe('UserErrorComponent', () => {
  let component: BusinessDetailsFinancialPageComponent;
  let fixture: ComponentFixture<BusinessDetailsFinancialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDetailsFinancialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDetailsFinancialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
