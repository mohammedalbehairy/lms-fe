import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsInfoPageComponent } from './business-details-info-page.component';

describe('UserErrorComponent', () => {
  let component: BusinessDetailsInfoPageComponent;
  let fixture: ComponentFixture<BusinessDetailsInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDetailsInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDetailsInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
