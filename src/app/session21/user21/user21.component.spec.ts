import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User21Component } from './user21.component';

describe('User21Component', () => {
  let component: User21Component;
  let fixture: ComponentFixture<User21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
