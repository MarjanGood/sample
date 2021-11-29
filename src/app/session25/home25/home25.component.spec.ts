import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home25Component } from './home25.component';

describe('Home25Component', () => {
  let component: Home25Component;
  let fixture: ComponentFixture<Home25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
