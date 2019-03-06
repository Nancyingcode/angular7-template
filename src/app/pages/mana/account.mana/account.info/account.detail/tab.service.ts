import { Injectable } from '@angular/core';
import { AccountWsbcComponent } from '../../account-wsbc/account-wsbc.component';
import { AccountWealInfoComponent } from '../../account.weal.info/account.weal.info';
import { AccountInviterComponent } from './inviter/inviter';
import { AccountOrderListComponent } from './orders/orders';
import { AccountSingleDetailComponent } from './single/account.single.detail';
import { TabItem } from './tab.item';

@Injectable()
export class TabService {
  getTabs(): TabItem[] {
    return [
      new TabItem(AccountSingleDetailComponent),

      new TabItem(AccountInviterComponent)
    ];
  }
}
