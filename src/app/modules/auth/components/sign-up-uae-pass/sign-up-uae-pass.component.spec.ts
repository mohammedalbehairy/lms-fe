import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpUaePassComponent } from './sign-up-uae-pass.component';

describe('SignUpUaePassComponent', () => {
  let component: SignUpUaePassComponent;
  let fixture: ComponentFixture<SignUpUaePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpUaePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpUaePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
