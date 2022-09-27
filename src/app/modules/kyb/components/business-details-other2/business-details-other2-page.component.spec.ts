import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsOther2PageComponent } from './business-details-other2-page.component';

describe('UserErrorComponent', () => {
  let component: BusinessDetailsOther2PageComponent;
  let fixture: ComponentFixture<BusinessDetailsOther2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDetailsOther2PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDetailsOther2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
