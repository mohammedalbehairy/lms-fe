import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsHomeAddressPageComponent } from './personal-details-home-address-page.component';

describe('UserErrorComponent', () => {
  let component: PersonalDetailsHomeAddressPageComponent;
  let fixture: ComponentFixture<PersonalDetailsHomeAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsHomeAddressPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsHomeAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
