import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationslipformComponent } from './observationslipform.component';

describe('ObservationslipformComponent', () => {
  let component: ObservationslipformComponent;
  let fixture: ComponentFixture<ObservationslipformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationslipformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationslipformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
