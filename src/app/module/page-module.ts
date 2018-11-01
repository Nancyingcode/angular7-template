import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from '../module/component-module';
import { LoginComponent } from '../pages/login/login';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../pages/home/home';




@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        ComponentModule
    ]
})
export class PageModule { }
