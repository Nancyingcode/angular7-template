import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManaComponent } from '../../pages/user.mana/acount.mana/account.mana';
import { AccountInfoComponent } from '../../pages/user.mana/acount.mana/account.info/account.info';
import { AdminManaComponent } from 'src/app/pages/user.mana/admin.mana/admin.mana';
import { AdminAddComponent } from 'src/app/pages/user.mana/admin.mana/admin.add/admin.add';
import { AdminUpdataComponent } from 'src/app/pages/user.mana/admin.mana/admin.update/admin.update';
import { MenuComponent } from 'src/app/component/menu/menu';
import { UserManaComponent } from 'src/app/pages/user.mana/user.mana';



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
                    }
                ]
            },
            {
                path: 'admin',
                component: AdminManaComponent,
                children: [
                    {
                        path: 'add',
                        component: AdminAddComponent
                    },
                    {
                        path: 'update',
                        component: AdminUpdataComponent
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
