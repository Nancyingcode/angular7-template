import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from '../module/component-module';
import { LoginComponent } from '../pages/login/login';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../pages/home/home';
import { AccountManaComponent } from '../pages/user.mana/acount.mana/account.mana';
import { UserManaRoutingModule } from './user.mana/user.mana.routing.module';
import { AccountInfoComponent } from '../pages/user.mana/acount.mana/account.info/account.info';
import { UserManaModule } from './user.mana/user.mana.module';
import { AdminManaComponent } from '../pages/user.mana/admin.mana/admin.mana';
import { AdminAddComponent } from '../pages/user.mana/admin.mana/admin.add/admin.add';
import { AdminUpdataComponent } from '../pages/user.mana/admin.mana/admin.update/admin.update';
import { UserManaComponent } from '../pages/user.mana/user.mana';
import { AdminInfoComponent } from '../pages/user.mana/admin.mana/admin.info/admin.info';
import { AdminDeleteComponent } from '../pages/user.mana/admin.mana/admin.delete/admin.delete';
import { AccountWealComponent } from '../pages/user.mana/acount.mana/account.weal/account.weal';
import { AccountDrawComponent } from '../pages/user.mana/acount.mana/account.draw/account.draw';
import { AccountRechargeComponent } from '../pages/user.mana/acount.mana/account.recharge/account.recharge';




@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        UserManaComponent,
        AccountManaComponent,
        AccountInfoComponent,
        AccountWealComponent,
        AccountDrawComponent,
        AccountRechargeComponent,
        AdminManaComponent,
        AdminAddComponent,
        AdminUpdataComponent,
        AdminInfoComponent,
        AdminDeleteComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ComponentModule,
        UserManaModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginComponent,
        HomeComponent,
        AppComponent,
        AccountManaComponent,
        UserManaComponent,
        AccountManaComponent,
        AccountInfoComponent,
        AccountWealComponent,
        AccountDrawComponent,
        AccountRechargeComponent,
        AdminManaComponent,
        AdminAddComponent,
        AdminUpdataComponent,
        AdminInfoComponent,
        AdminDeleteComponent,
        ComponentModule,
        ReactiveFormsModule
    ]
})
export class PageModule { }
