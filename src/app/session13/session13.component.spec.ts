import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session13Component } from './session13.component';

describe('Session13Component', () => {
  let component: Session13Component;
  let fixture: ComponentFixture<Session13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
