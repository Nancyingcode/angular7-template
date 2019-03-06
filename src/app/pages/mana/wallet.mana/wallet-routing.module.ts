import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletBuyComponent, WalletComponent, WalletExchangeComponent, WalletReBuyComponent } from './wallet';

const walletRoutes = [
  {
    path: '',
    component: WalletComponent,
    children: [
      {
        path: 'buy',
        component: WalletBuyComponent
      },
      {
        path: 'reBuy',
        component: WalletReBuyComponent
      },
      {
        path: 'exchange',
        component: WalletExchangeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(walletRoutes)],
  exports: [RouterModule]
})

export class WalletRoutingModule { }
