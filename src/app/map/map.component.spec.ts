import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationMapComponent } from './map.component';

describe('InnovationMapComponent', () => {
  let component: InnovationMapComponent;
  let fixture: ComponentFixture<InnovationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
