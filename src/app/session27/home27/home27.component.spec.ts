import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home27Component } from './home27.component';

describe('Home27Component', () => {
  let component: Home27Component;
  let fixture: ComponentFixture<Home27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
