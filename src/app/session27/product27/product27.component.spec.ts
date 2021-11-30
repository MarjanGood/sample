import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product27Component } from './product27.component';

describe('Product27Component', () => {
  let component: Product27Component;
  let fixture: ComponentFixture<Product27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
