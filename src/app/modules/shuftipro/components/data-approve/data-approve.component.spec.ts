import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataApproveComponent } from './data-approve.component';

describe('DataApproveComponent', () => {
  let component: DataApproveComponent;
  let fixture: ComponentFixture<DataApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
