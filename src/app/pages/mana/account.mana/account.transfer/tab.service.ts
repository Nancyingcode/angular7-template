import { Injectable } from '@angular/core';
import { TabItem } from './tab.item';
import { AccountTransferInComponent } from './transferk.in/account.transferk.in';
import { AccountTransferOutComponent } from './transferk.out/account.transferk.out';

@Injectable()
export class TransferTabService {
  getTabs(): TabItem[] {
    return [
      new TabItem(AccountTransferInComponent),

      new TabItem(AccountTransferOutComponent)
    ];
  }
}
