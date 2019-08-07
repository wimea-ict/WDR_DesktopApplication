import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditannualComponent } from './editannual.component';

describe('EditannualComponent', () => {
  let component: EditannualComponent;
  let fixture: ComponentFixture<EditannualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditannualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditannualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
