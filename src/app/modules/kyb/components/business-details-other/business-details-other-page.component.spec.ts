import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsOtherPageComponent } from './business-details-other-page.component';

describe('UserErrorComponent', () => {
  let component: BusinessDetailsOtherPageComponent;
  let fixture: ComponentFixture<BusinessDetailsOtherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDetailsOtherPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDetailsOtherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
