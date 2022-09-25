import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedDocumentsPageComponent } from './uploaded-documents-page.component';

describe('UserErrorComponent', () => {
  let component: UploadedDocumentsPageComponent;
  let fixture: ComponentFixture<UploadedDocumentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedDocumentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadedDocumentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
