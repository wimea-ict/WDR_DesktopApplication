import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DekandalComponent } from './dekandal.component';

describe('DekandalComponent', () => {
  let component: DekandalComponent;
  let fixture: ComponentFixture<DekandalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DekandalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DekandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
