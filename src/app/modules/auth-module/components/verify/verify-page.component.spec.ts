import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPageComponent } from './verify-page.component';

describe('UserErrorComponent', () => {
  let component: VerifyPageComponent;
  let fixture: ComponentFixture<VerifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});