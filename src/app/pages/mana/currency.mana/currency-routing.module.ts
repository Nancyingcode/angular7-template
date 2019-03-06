import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const replyRoutes: Routes = [
  {
    path: '',
    component: CurrencyComponent,
    children: [
      {
        path: 'currencySelling',
        component: CurrencySellingComponent,
        children: [
          {
            path: 'Imacc',
            component: CurrencySellingImaccComponent
          },
          {
            path: 'imaccDetail',
            component: CurrencySellingImaccDetailComponent
          },
          {
            path: 'Eth',
            component: CurrencySellingEthComponent
          },
          {
            path: 'ethDetail',
            component: CurrencySellingEthDetailComponent
          },
          {
            path: 'Usdt',
            component: CurrencySellingUstdComponent
          },
          {
            path: 'usdtDetail',
            component: CurrencySellingUstdDetailComponent
          }
        ]
      },
      {
        path: 'currencyLock',
        component: CurrencyLockComponent,
        children: [
          {
            path: 'Imacc',
            component: CurrencyLockImaccComponent
          },
          {
            path: 'imaccDetail',
            component: CurrencyLockImaccDetailComponent
          },
          {
            path: 'Eth',
            component: CurrencyLockEthComponent
          },
          {
            path: 'ethDetail',
            component: CurrencyLockEthDetailComponent
          },
          {
            path: 'Usdt',
            component: CurrencyLockUstdComponent
          },
          {
            path: 'usdtDetail',
            component: CurrencyLockUstdDetailComponent
          }
        ]
      },
      {
        path: 'currencyCheck',
        component: CurrencyCheckComponent,
        children: [
          {
            path: 'Imacc',
            component: CurrencyCheckImaccComponent
          },
          {
            path: 'imaccDetail',
            component: CurrencyCheckImaccDetailComponent
          },
          {
            path: 'Eth',
            component: CurrencyCheckEthComponent
          },
          {
            path: 'ethDetail',
            component: CurrencyCheckEthDetailComponent
          },
          {
            path: 'Usdt',
            component: CurrencyCheckUstdComponent
          },
          {
            path: 'usdtDetail',
            component: CurrencyCheckUstdDetailComponent
          }
        ]
      },
      {
        path: 'currencyDone',
        component: CurrencyDoneComponent,
        children: [
          {
            path: 'Imacc',
            component: CurrencyDoneImaccComponent
          },
          {
            path: 'imaccDetail',
            component: CurrencyDoneImaccDetailComponent
          },
          {
            path: 'Eth',
            component: CurrencyDoneEthComponent
          },
          {
            path: 'ethDetail',
            component: CurrencyDoneEthDetailComponent
          },
          {
            path: 'Usdt',
            component: CurrencyDoneUstdComponent
          },
          {
            path: 'usdtDetail',
            component: CurrencyDoneUstdDetailComponent
          }
        ]
      },
      {
        path: 'currencyRequest',
        component: CurrencyRequestComponent,
        children: [
          {
            path: 'Usdt',
            component: CurrencyRequestUstdComponent
          }
        ]
      },
      {
        path: 'modifyList',
        component: CurrencyRequestModifyListComponent
      },
      {
        path: 'cancal',
        component: CurrencyCancelListComponent
      },
      {
        path: 'refuse',
        component: CurrencyRefuseListComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(replyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CurrencyRoutingModule { }
