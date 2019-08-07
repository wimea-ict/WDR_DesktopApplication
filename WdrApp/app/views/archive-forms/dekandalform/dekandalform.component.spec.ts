import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DekandalformComponent } from './dekandalform.component';

describe('DekandalformComponent', () => {
  let component: DekandalformComponent;
  let fixture: ComponentFixture<DekandalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DekandalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DekandalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
