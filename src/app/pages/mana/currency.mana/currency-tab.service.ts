import { Injectable } from '@angular/core';
import {
  CurrencyCheckUstdComponent,
  CurrencyDoneUstdComponent,
  CurrencyLockUstdComponent,
  CurrencyRequestUstdComponent,
  CurrencySellingUstdComponent
} from './currency';
import { TabItem } from './tab.item';

@Injectable()
export class CurrencyTabService {
  getTabs(detail?: {}, income?: {}, devices?: {}, inviters?: {}): unknown {
    return [
      new TabItem(CurrencyCheckUstdComponent, detail),

      new TabItem(CurrencyDoneUstdComponent, income),

      new TabItem(CurrencyLockUstdComponent, devices),

      new TabItem(CurrencySellingUstdComponent, inviters)
    ];
  }
}
