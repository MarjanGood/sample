import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session18Component } from './session18.component';

describe('Session18Component', () => {
  let component: Session18Component;
  let fixture: ComponentFixture<Session18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
