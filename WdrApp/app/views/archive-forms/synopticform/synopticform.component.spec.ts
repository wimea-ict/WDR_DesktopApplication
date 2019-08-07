import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopticformComponent } from './synopticform.component';

describe('SynopticformComponent', () => {
  let component: SynopticformComponent;
  let fixture: ComponentFixture<SynopticformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynopticformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopticformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
