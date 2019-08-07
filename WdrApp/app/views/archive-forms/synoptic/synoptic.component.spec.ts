import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopticComponent } from './synoptic.component';

describe('SynopticComponent', () => {
  let component: SynopticComponent;
  let fixture: ComponentFixture<SynopticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynopticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
