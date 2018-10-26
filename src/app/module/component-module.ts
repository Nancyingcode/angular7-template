import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from '../app.component';
import { TableComponent } from '../component/table/table';
import { ButtonComponent } from '../component/button/buttonGroup/button.group';
import { DefaultToastComponent } from '../component/toast/defaultToast/default.toast';

import { BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        ButtonComponent,
        DefaultToastComponent
    ],
    imports: [
        BrowserModule,
        ModalModule.forRoot()
    ],
    providers: [
        BsModalService
    ]
})
export class ComponentModule { }
