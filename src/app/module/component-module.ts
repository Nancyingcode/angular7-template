import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { NavComponent } from '../component/nav/nav';
import { TableComponent } from '../component/table/table';
import { MenuComponent } from '../component/menu/menu';
import { ButtonComponent } from '../component/button/buttonGroup/button.group';
import { DefaultToastComponent } from '../component/toast/defaultToast/default.toast';
import { DefaultDatePickComponent } from '../component/datepick/defaultDatepick/default.datepick';
import { ManagerComponent } from '../pages/user/manager';
import { BsModalService } from 'ngx-bootstrap/modal';

import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        TableComponent,
        ButtonComponent,
        MenuComponent,
        DefaultToastComponent,
        DefaultDatePickComponent,
        ManagerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TabsModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        BsModalService
    ]
})
export class ComponentModule { }
