import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home23Component } from './home23.component';

describe('Home23Component', () => {
  let component: Home23Component;
  let fixture: ComponentFixture<Home23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
