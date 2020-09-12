import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunScreenComponent } from './run-screen.component';

describe('RunScreenComponent', () => {
  let component: RunScreenComponent;
  let fixture: ComponentFixture<RunScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
