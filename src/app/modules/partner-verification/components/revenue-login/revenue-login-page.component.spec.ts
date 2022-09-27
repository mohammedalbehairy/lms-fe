import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueLoginPageComponent } from './revenue-login-page.component';

describe('UserErrorComponent', () => {
  let component: RevenueLoginPageComponent;
  let fixture: ComponentFixture<RevenueLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
