import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletReBuyComponent } from './wallet.re-buy.component';

describe('WalletReBuyComponent', () => {
  let component: WalletReBuyComponent;
  let fixture: ComponentFixture<WalletReBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletReBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletReBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
