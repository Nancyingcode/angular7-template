import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManaComponent } from '../../pages/user.mana/acount.mana/account.mana';
import { AccountInfoComponent } from '../../pages/user.mana/acount.mana/account.info/account.info';
import { AdminManaComponent } from 'src/app/pages/user.mana/admin.mana/admin.mana';
import { AdminAddComponent } from 'src/app/pages/user.mana/admin.mana/admin.add/admin.add';
import { AdminUpdataComponent } from 'src/app/pages/user.mana/admin.mana/admin.update/admin.update';
import { MenuComponent } from 'src/app/component/menu/menu';
import { UserManaComponent } from 'src/app/pages/user.mana/user.mana';
import { AdminInfoComponent } from 'src/app/pages/user.mana/admin.mana/admin.info/admin.info';
import { AdminDeleteComponent } from 'src/app/pages/user.mana/admin.mana/admin.delete/admin.delete';
import { AccountWealComponent } from 'src/app/pages/user.mana/acount.mana/account.weal/account.weal';
import { AccountDrawComponent } from 'src/app/pages/user.mana/acount.mana/account.draw/account.draw';
import { AccountRechargeComponent } from 'src/app/pages/user.mana/acount.mana/account.recharge/account.recharge';
import { WealUpdateComponent } from 'src/app/pages/user.mana/acount.mana/account.weal/weal.update/weal.update';



const userManaRoutes: Routes = [
    {
        path: '',
        component: UserManaComponent,
        children: [
            {
                path: 'account',
                component: AccountManaComponent,
                children: [
                    {
                        path: 'info',
                        component: AccountInfoComponent
                    },
                    {
                        path: 'weal',
                        component: AccountWealComponent
                    },
                    {
                        path: 'draw',
                        component: AccountDrawComponent
                    },
                    {
                        path: 'recharge',
                        component: AccountRechargeComponent
                    }
                ]
            },
            {
                path: 'update/:account',
                component: WealUpdateComponent
            },
            {
                path: 'admin',
                component: AdminManaComponent,
                children: [
                    {
                        path: 'info',
                        component: AdminInfoComponent
                    },
                    {
                        path: 'add',
                        component: AdminAddComponent
                    },
                    {
                        path: 'update/:account',
                        component: AdminUpdataComponent
                    },
                    {
                        path: 'delete',
                        component: AdminDeleteComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userManaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserManaRoutingModule { }
