import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2cDoneComponent } from './c2c.done.component';

describe('C2c.DoneComponent', () => {
  let component: C2cDoneComponent;
  let fixture: ComponentFixture<C2cDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2cDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2cDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
