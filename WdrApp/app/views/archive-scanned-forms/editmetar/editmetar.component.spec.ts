import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmetarComponent } from './editmetar.component';

describe('EditmetarComponent', () => {
  let component: EditmetarComponent;
  let fixture: ComponentFixture<EditmetarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmetarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmetarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
