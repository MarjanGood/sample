import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiKeyboardComponent } from './multi-keyboard.component';

describe('MultiKeyboardComponent', () => {
  let component: MultiKeyboardComponent;
  let fixture: ComponentFixture<MultiKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
