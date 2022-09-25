import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsIdentifcationPageComponent } from './personal-details-identifcation-page.component';

describe('UserErrorComponent', () => {
  let component: PersonalDetailsIdentifcationPageComponent;
  let fixture: ComponentFixture<PersonalDetailsIdentifcationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsIdentifcationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsIdentifcationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
