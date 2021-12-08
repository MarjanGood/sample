import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session29Component } from './session29.component';

describe('Session29Component', () => {
  let component: Session29Component;
  let fixture: ComponentFixture<Session29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
