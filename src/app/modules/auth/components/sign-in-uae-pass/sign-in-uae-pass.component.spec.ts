import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUaePassComponent } from './sign-in-uae-pass.component';

describe('SignInUaePassComponent', () => {
  let component: SignInUaePassComponent;
  let fixture: ComponentFixture<SignInUaePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUaePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInUaePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
