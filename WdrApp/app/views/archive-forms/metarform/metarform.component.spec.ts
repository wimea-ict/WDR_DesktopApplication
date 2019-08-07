import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetarformComponent } from './metarform.component';

describe('MetarformComponent', () => {
  let component: MetarformComponent;
  let fixture: ComponentFixture<MetarformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetarformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
