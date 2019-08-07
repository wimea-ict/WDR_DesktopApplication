import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdekandalformComponent } from './editdekandalform.component';

describe('EditdekandalformComponent', () => {
  let component: EditdekandalformComponent;
  let fixture: ComponentFixture<EditdekandalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdekandalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdekandalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
