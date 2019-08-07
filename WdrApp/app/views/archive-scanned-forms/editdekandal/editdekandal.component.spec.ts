import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdekandalComponent } from './editdekandal.component';

describe('EditdekandalComponent', () => {
  let component: EditdekandalComponent;
  let fixture: ComponentFixture<EditdekandalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdekandalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdekandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
