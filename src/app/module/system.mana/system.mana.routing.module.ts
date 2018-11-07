import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemManaComponent } from '../../pages/system.mana/system.mana';
import { SystemMarketComponent } from '../../pages/system.mana/system.market/system.market';



const systemManaRoutes: Routes = [
    {
        path: '',
        component: SystemManaComponent,
        children: [
            {
                path: 'market',
                component: SystemMarketComponent
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
