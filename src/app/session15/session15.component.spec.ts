import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session15Component } from './session15.component';

describe('Session15Component', () => {
  let component: Session15Component;
  let fixture: ComponentFixture<Session15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
