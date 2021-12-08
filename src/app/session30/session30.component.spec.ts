import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session30Component } from './session30.component';

describe('Session30Component', () => {
  let component: Session30Component;
  let fixture: ComponentFixture<Session30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
