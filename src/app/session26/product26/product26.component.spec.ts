import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product26Component } from './product26.component';

describe('Product26Component', () => {
  let component: Product26Component;
  let fixture: ComponentFixture<Product26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
