import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailPage } from './productdetail.page';

describe('ProductdetailPage', () => {
  let component: ProductdetailPage;
  let fixture: ComponentFixture<ProductdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
