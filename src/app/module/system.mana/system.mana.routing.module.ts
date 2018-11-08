import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemManaComponent } from '../../pages/system.mana/system.mana';
import { SystemMarketComponent } from '../../pages/system.mana/system.market/system.market';
import { SystemHomeComponent } from 'src/app/pages/system.mana/system.home/system.home';
import { SystemInvitationComponent } from 'src/app/pages/system.mana/system.invitation/system.invitation';
import { SystemMineComponent } from 'src/app/pages/system.mana/system.mine/system.mine';
import { SystemTradeComponent } from 'src/app/pages/system.mana/system.trade/system.trade';
import { MarketItemComponent } from 'src/app/pages/system.mana/system.market/market.item/market.item';
import { MarketOrderComponent } from 'src/app/pages/system.mana/system.market/market.order/market.order';
import { HomeCarouselComponent } from 'src/app/pages/system.mana/system.home/home.carousel/home.carousel';
import { HomePostComponent } from 'src/app/pages/system.mana/system.home/home.post/home.post';
import { ItemUpdateComponent } from 'src/app/pages/system.mana/system.market/market.item/item.update/item.update';



const systemManaRoutes: Routes = [
    {
        path: '',
        component: SystemManaComponent,
        children: [
            {
                path: 'market',
                component: SystemMarketComponent,
                children: [
                    {
                        path: 'item',
                        component: MarketItemComponent
                    },
                    {
                        path: 'order',
                        component: MarketOrderComponent
                    },
                ]
            },
            {
                path: 'updateItem',
                component: ItemUpdateComponent,
            },
            {
                path: 'home',
                component: SystemHomeComponent,
                children: [
                    {
                        path: 'carousel',
                        component: HomeCarouselComponent
                    },
                    {
                        path: 'order',
                        component: HomePostComponent
                    },
                ]
            },
            {
                path: 'invitation',
                component: SystemInvitationComponent
            },
            {
                path: 'mine',
                component: SystemMineComponent
            },
            {
                path: 'trade',
                component: SystemTradeComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(systemManaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SystemManaRoutingModule { }
