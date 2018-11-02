import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from '../module/component-module';
import { LoginComponent } from '../pages/login/login';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../pages/home/home';
import { AccountManaComponent } from '../pages/userMana/acountMana/account.mana';
import { UserManaRoutingModule } from './user.mana.routing.module';
import { AccountInfoComponent } from '../pages/userMana/acountMana/account.info/account.info';
import { UserManaModule } from './user.mana.module';




@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        AccountManaComponent,
        AccountInfoComponent,
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
        ComponentModule
    ]
})
export class PageModule { }
