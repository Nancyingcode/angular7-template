import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemManaComponent } from '../../pages/system.mana/system.mana';
import { SystemMarketComponent } from '../../pages/system.mana/system.market/system.market';
import { SystemHomeComponent } from 'src/app/pages/system.mana/system.home/system.home';
import { SystemInvitationComponent } from 'src/app/pages/system.mana/system.invitation/system.invitation';
import { SystemMineComponent } from 'src/app/pages/system.mana/system.mine/system.mine';
import { SystemTradeComponent } from 'src/app/pages/system.mana/system.trade/system.trade';



const systemManaRoutes: Routes = [
    {
        path: '',
        component: SystemManaComponent,
        children: [
            {
                path: 'market',
                component: SystemMarketComponent
            },
            {
                path: 'home',
                component: SystemHomeComponent
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
