import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsAddressPageComponent } from './personal-details-address-page.component';

describe('UserErrorComponent', () => {
  let component: PersonalDetailsAddressPageComponent;
  let fixture: ComponentFixture<PersonalDetailsAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsAddressPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
