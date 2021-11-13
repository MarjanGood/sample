import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUser21Component } from './edit-user21.component';

describe('EditUser21Component', () => {
  let component: EditUser21Component;
  let fixture: ComponentFixture<EditUser21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUser21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUser21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
