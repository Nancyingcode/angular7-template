import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManaComponent } from '../pages/userMana/acountMana/account.mana';
import { AccountInfoComponent } from '../pages/userMana/acountMana/account.info/account.info';



const userManaRoutes: Routes = [
    {
        path: '',
        component: AccountManaComponent,
        children: [
            {
                path: 'account',
                component: AccountInfoComponent
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
