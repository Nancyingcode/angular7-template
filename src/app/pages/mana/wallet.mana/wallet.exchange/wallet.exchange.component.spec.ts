import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletExchangeComponent } from './wallet.exchange.component';

describe('WalletExchangeComponent', () => {
  let component: WalletExchangeComponent;
  let fixture: ComponentFixture<WalletExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
