import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home26Component } from './home26.component';

describe('Home26Component', () => {
  let component: Home26Component;
  let fixture: ComponentFixture<Home26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
