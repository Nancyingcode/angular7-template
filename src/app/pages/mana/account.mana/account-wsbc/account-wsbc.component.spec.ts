import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWsbcComponent } from './account-wsbc.component';

describe('AccountWsbcComponent', () => {
  let component: AccountWsbcComponent;
  let fixture: ComponentFixture<AccountWsbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWsbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWsbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
