import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuePreApprovePageComponent } from './revenue-preapprove-page.component';

describe('UserErrorComponent', () => {
  let component: RevenuePreApprovePageComponent;
  let fixture: ComponentFixture<RevenuePreApprovePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuePreApprovePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuePreApprovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
