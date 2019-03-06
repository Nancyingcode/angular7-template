import { Injectable } from '@angular/core';
import { TabItem } from './tab.item';
import { WalletBuyComponent } from './wallet.buy/wallet.buy.component';
import { WalletReBuyComponent } from './wallet.re-buy/wallet.re-buy.component';

@Injectable()
export class WalletTabService {
  getTabs(): TabItem[] {
    return [
      new TabItem(WalletBuyComponent),

      new TabItem(WalletReBuyComponent)
    ];
  }
}
