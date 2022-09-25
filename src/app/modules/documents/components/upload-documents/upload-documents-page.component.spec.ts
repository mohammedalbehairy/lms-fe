import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentsPageComponent } from './upload-documents-page.component';

describe('UserErrorComponent', () => {
  let component: UploadDocumentsPageComponent;
  let fixture: ComponentFixture<UploadDocumentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDocumentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDocumentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
