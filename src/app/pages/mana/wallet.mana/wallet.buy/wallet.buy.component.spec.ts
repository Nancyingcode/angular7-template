import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBuyComponent } from './wallet.buy.component';

describe('WalletBuyComponent', () => {
  let component: WalletBuyComponent;
  let fixture: ComponentFixture<WalletBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
