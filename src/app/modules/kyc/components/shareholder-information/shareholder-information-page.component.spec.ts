import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderInformationPageComponent } from './shareholder-information-page.component';

describe('UserErrorComponent', () => {
  let component: ShareholderInformationPageComponent;
  let fixture: ComponentFixture<ShareholderInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareholderInformationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareholderInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
