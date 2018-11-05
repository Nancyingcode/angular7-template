import { NgModule } from '@angular/core';
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




@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        UserManaComponent,
        AccountManaComponent,
        AccountInfoComponent,
        AdminManaComponent,
        AdminAddComponent,
        AdminUpdataComponent,
        AdminInfoComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ComponentModule,
        UserManaModule
    ],
    exports: [
        LoginComponent,
        HomeComponent,
        AppComponent,
        AccountManaComponent,
        UserManaComponent,
        AccountManaComponent,
        AccountInfoComponent,
        AdminManaComponent,
        AdminAddComponent,
        AdminUpdataComponent,
        AdminInfoComponent,
        ComponentModule
    ]
})
export class PageModule { }
