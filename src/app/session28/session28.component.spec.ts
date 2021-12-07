import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session28Component } from './session28.component';

describe('Session28Component', () => {
  let component: Session28Component;
  let fixture: ComponentFixture<Session28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
