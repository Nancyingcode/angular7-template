import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2cSellingComponent } from './c2c.selling.component';

describe('C2c.SellingComponent', () => {
  let component: C2cSellingComponent;
  let fixture: ComponentFixture<C2cSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2cSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2cSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
