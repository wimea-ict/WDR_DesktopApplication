import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsynopticformComponent } from './editsynopticform.component';

describe('EditsynopticformComponent', () => {
  let component: EditsynopticformComponent;
  let fixture: ComponentFixture<EditsynopticformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsynopticformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsynopticformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
