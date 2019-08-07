import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersummaryformComponent } from './weathersummaryform.component';

describe('WeathersummaryformComponent', () => {
  let component: WeathersummaryformComponent;
  let fixture: ComponentFixture<WeathersummaryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathersummaryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathersummaryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
