import { NgModule } from '@angular/core';
import { ComponentModule } from '../module/component-module';
import { LoginComponent } from '../pages/login/login';
import { AppComponent } from '../app.component';




@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        ComponentModule
    ]
})
export class PageModule { }
