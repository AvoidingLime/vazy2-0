import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdetailPage } from './shopdetail.page';

describe('ShopdetailPage', () => {
  let component: ShopdetailPage;
  let fixture: ComponentFixture<ShopdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
