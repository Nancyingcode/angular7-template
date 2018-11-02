import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from '../module/component-module';
import { LoginComponent } from '../pages/login/login';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../pages/home/home';
import { AccountManaComponent } from '../pages/userMana/acountMana/account.mana';




@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        AppComponent,
        AccountManaComponent
    ],
    imports: [
        BrowserModule,
        ComponentModule
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
