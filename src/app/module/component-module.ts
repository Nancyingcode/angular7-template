import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from '../app.component';
import { TableComponent } from '../component/table/table';
import { ButtonComponent } from '../component/button/buttonGroup/button.group';
import { DefaultToastComponent } from '../component/toast/defaultToast/default.toast';
import { DefaultDatePickComponent } from '../component/datepick/defaultDatepick/default.datepick';
import { BsModalService } from 'ngx-bootstrap/modal';

import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        ButtonComponent,
        DefaultToastComponent,
        DefaultDatePickComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    providers: [
        BsModalService
    ]
})
export class ComponentModule { }
