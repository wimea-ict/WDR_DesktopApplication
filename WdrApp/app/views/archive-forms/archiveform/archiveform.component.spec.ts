import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveformComponent } from './archiveform.component';

describe('ArchiveformComponent', () => {
  let component: ArchiveformComponent;
  let fixture: ComponentFixture<ArchiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
