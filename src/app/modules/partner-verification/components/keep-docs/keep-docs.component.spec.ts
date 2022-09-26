import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepDocsComponent } from './keep-docs.component';

describe('KeepDocsComponent', () => {
  let component: KeepDocsComponent;
  let fixture: ComponentFixture<KeepDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
