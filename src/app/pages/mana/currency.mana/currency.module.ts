import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentModule } from 'src/app/module/component-module';
import { CurrencyService } from 'src/app/service/currency.service';
import {
  CurrencyCancalComponent,
  CurrencyCancelDetailComponent,
  CurrencyCancelListComponent,
  CurrencyCheckComponent,
  CurrencyCheckEthComponent,
  CurrencyCheckEthDetailComponent,
  CurrencyCheckImaccComponent,
  CurrencyCheckImaccDetailComponent,
  CurrencyCheckUstdComponent,
  CurrencyCheckUstdDetailComponent,
  CurrencyComponent,
  CurrencyDoneComponent,
  CurrencyDoneEthComponent,
  CurrencyDoneEthDetailComponent,
  CurrencyDoneImaccComponent,
  CurrencyDoneImaccDetailComponent,
  CurrencyDoneUstdComponent,
  CurrencyDoneUstdDetailComponent,
  CurrencyLockComponent,
  CurrencyLockEthComponent,
  CurrencyLockEthDetailComponent,
  CurrencyLockImaccComponent,
  CurrencyLockImaccDetailComponent,
  CurrencyLockUstdComponent,
  CurrencyLockUstdDetailComponent,
  CurrencyRefuseComponent,
  CurrencyRefuseDetailComponent,
  CurrencyRefuseListComponent,
  CurrencyRequestComponent,
  CurrencyRequestModifyListComponent,
  CurrencyRequestUstdComponent,
  CurrencyRequestUstdDetailComponent,
  CurrencySellingComponent,
  CurrencySellingEthComponent,
  CurrencySellingEthDetailComponent,
  CurrencySellingImaccComponent,
  CurrencySellingImaccDetailComponent,
  CurrencySellingUstdComponent,
  CurrencySellingUstdDetailComponent
} from './currency';
import { CurrencyRoutingModule } from './currency-routing.module';

@NgModule({
  declarations: [
    CurrencyComponent,
    CurrencySellingComponent,
    CurrencySellingImaccComponent,
    CurrencySellingEthComponent,
    CurrencySellingUstdComponent,
    CurrencySellingImaccDetailComponent,
    CurrencySellingEthDetailComponent,
    CurrencySellingUstdDetailComponent,

    CurrencyLockComponent,
    CurrencyLockImaccComponent,
    CurrencyLockEthComponent,
    CurrencyLockUstdComponent,
    CurrencyLockImaccDetailComponent,
    CurrencyLockEthDetailComponent,
    CurrencyLockUstdDetailComponent,

    CurrencyCheckComponent,
    CurrencyCheckImaccComponent,
    CurrencyCheckEthComponent,
    CurrencyCheckUstdComponent,
    CurrencyCheckImaccDetailComponent,
    CurrencyCheckEthDetailComponent,
    CurrencyCheckUstdDetailComponent,
    CurrencyCheckEthComponent,
    CurrencyCheckUstdComponent,

    CurrencyDoneComponent,
    CurrencyDoneImaccComponent,
    CurrencyDoneEthComponent,
    CurrencyDoneUstdComponent,
    CurrencyDoneImaccDetailComponent,
    CurrencyDoneEthDetailComponent,
    CurrencyDoneUstdDetailComponent,

    CurrencyRequestComponent,
    CurrencyRequestUstdComponent,
    CurrencyRequestUstdDetailComponent,

    CurrencyRequestModifyListComponent,

    CurrencyRefuseComponent,
    CurrencyRefuseListComponent,
    CurrencyRefuseDetailComponent,

    CurrencyCancalComponent,
    CurrencyCancelListComponent,
    CurrencyCancelDetailComponent
  ],
  imports: [
    ComponentModule,
    CommonModule,
    CurrencyRoutingModule
  ],
  providers: [CurrencyService],
  entryComponents: [
    CurrencyCheckUstdDetailComponent,
    CurrencyDoneUstdDetailComponent,
    CurrencyLockUstdDetailComponent,
    CurrencyRefuseDetailComponent,
    CurrencyRequestUstdDetailComponent,
    CurrencySellingUstdDetailComponent,
    CurrencyCancelDetailComponent
  ]
})

export class CurrencyModule { }
