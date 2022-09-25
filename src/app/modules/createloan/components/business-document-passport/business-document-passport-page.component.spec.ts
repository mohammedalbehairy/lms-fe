import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDocumentPassportPageComponent } from './business-document-passport-page.component';

describe('UserErrorComponent', () => {
  let component: BusinessDocumentPassportPageComponent;
  let fixture: ComponentFixture<BusinessDocumentPassportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDocumentPassportPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDocumentPassportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
