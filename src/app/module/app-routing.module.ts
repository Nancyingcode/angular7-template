import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guard/login.guard';
import { LoginComponent } from '../pages/login/login';
import { ManaComponent } from '../pages/mana/mana';
import { PageNotFoundComponent } from '../pages/page.not.found/page.not.found';
import { SelectivePreloadingStrategyService } from '../selective-preloading-strategy.service';

const routes: Routes = [
  { path: '', redirectTo: '/mana/account', pathMatch: 'full' },
  {
    path: 'mana',
    component: ManaComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/mana/account', pathMatch: 'full' },
      {
        path: 'account',
        loadChildren: 'src/app/pages/mana/account.mana/account.module#AccountModule',
        data: { preload: true }
      },
      {
        path: 'currency',
        loadChildren: 'src/app/pages/mana/currency.mana/currency.module#CurrencyModule'
      },
      {
        path: 'reply',
        loadChildren: 'src/app/pages/mana/reply.mana/reply.module#ReplyModule'
      },
      {
        path: 'weal',
        loadChildren: 'src/app/pages/mana/weal.mana/weal.module#WealModule'
      },
      {
        path: 'market',
        loadChildren: 'src/app/pages/mana/market.mana/market.module#MarketModule'
      },
      {
        path: 'c2c',
        loadChildren: 'src/app/pages/mana/c2c.mana/c2c.module#C2cModule'
      },
      {
        path: 'announce',
        loadChildren: 'src/app/pages/mana/announce.mana/announce.module#AnnounceModule'
      },
      {
        path: 'wallet',
        loadChildren: 'src/app/pages/mana/wallet.mana/wallet.module#WalletModule'
      },
      {
        path: 'system',
        loadChildren: 'src/app/pages/mana/system.mana/system.module#SystemModule'
      },
      {
        path: 'carousel',
        loadChildren: 'src/app/pages/mana/carousel.mana/carousel.module#CarouselModule'
      },
      {
        path: 'order',
        loadChildren: 'src/app/pages/mana/order.mana/order.module#OrderModule'
      },
      {
        path: 'admin',
        loadChildren: 'src/app/pages/mana/admin.mana/admin.module#AdminModule'
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
