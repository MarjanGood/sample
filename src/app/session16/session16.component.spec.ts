import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session16Component } from './session16.component';

describe('Session16Component', () => {
  let component: Session16Component;
  let fixture: ComponentFixture<Session16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
