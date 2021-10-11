import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session14Component } from "./Session14Component";

describe('Session14Component', () => {
  let component: Session14Component;
  let fixture: ComponentFixture<Session14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
