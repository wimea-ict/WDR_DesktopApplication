import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarchiveComponent } from './editarchive.component';

describe('EditarchiveComponent', () => {
  let component: EditarchiveComponent;
  let fixture: ComponentFixture<EditarchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
