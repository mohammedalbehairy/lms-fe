import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfilePageComponent } from './company-profile-page.component';

describe('UserErrorComponent', () => {
  let component: CompanyProfilePageComponent;
  let fixture: ComponentFixture<CompanyProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
