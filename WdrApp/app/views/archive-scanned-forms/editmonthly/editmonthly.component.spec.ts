import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmonthlyComponent } from './editmonthly.component';

describe('EditmonthlyComponent', () => {
  let component: EditmonthlyComponent;
  let fixture: ComponentFixture<EditmonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
