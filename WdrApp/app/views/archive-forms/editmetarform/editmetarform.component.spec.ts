import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmetarformComponent } from './editmetarform.component';

describe('EditmetarformComponent', () => {
  let component: EditmetarformComponent;
  let fixture: ComponentFixture<EditmetarformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmetarformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmetarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
