import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentPopupComponent } from './incident-popup.component';

describe('IncidentPopupComponent', () => {
  let component: IncidentPopupComponent;
  let fixture: ComponentFixture<IncidentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
