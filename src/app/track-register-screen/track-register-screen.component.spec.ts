import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRegisterScreenComponent } from './track-register-screen.component';

describe('TrackRegisterScreenComponent', () => {
  let component: TrackRegisterScreenComponent;
  let fixture: ComponentFixture<TrackRegisterScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackRegisterScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackRegisterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
