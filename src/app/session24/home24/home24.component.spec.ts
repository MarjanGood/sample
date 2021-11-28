import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home24Component } from './home24.component';

describe('Home24Component', () => {
  let component: Home24Component;
  let fixture: ComponentFixture<Home24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
