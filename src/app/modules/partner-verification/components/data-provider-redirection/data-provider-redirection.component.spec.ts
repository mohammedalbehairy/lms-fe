import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProviderRedirectionComponent } from './data-provider-redirection.component';

describe('DataProviderRedirectionComponent', () => {
  let component: DataProviderRedirectionComponent;
  let fixture: ComponentFixture<DataProviderRedirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProviderRedirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProviderRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
