import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoConfirmPageComponent } from './personal-info-confirm-page.component';

describe('UserErrorComponent', () => {
  let component: PersonalInfoConfirmPageComponent;
  let fixture: ComponentFixture<PersonalInfoConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoConfirmPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfoConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
