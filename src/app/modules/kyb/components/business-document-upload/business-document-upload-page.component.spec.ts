import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDocumentUploadPageComponent } from './business-document-upload-page.component';

describe('UserErrorComponent', () => {
  let component: BusinessDocumentUploadPageComponent;
  let fixture: ComponentFixture<BusinessDocumentUploadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDocumentUploadPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDocumentUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
