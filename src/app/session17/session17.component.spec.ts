import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session17Component } from './session17.component';

describe('Session17Component', () => {
  let component: Session17Component;
  let fixture: ComponentFixture<Session17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
