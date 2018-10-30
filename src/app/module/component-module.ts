import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppComponent } from '../app.component';
import { NavComponent } from '../component/nav/nav';
import { TableComponent } from '../component/table/table';
import { MenuComponent } from '../component/menu/menu';
import { DefaultPaginationComponent } from '../component/pagination/defaultPagination/default.pagination';
import { ButtonComponent } from '../component/button/buttonGroup/button.group';
import { RangePaginationComponent } from '../component/datepick/rangeDatepick/range.pick';
import { DefaultToastComponent } from '../component/toast/defaultToast/default.toast';
import { DefaultDatePickComponent } from '../component/datepick/defaultDatepick/default.datepick';
import { DefaultTimePickComponent } from '../component/timepick/defaultTimepick/default.timepick';
import { FileUploadComponent } from '../component/upload/fileUpload/file.upload';
import { ManagerComponent } from '../pages/user/manager';
import { BsModalService } from 'ngx-bootstrap/modal';

import { FormsModule } from '@angular/forms';
import { TextToastComponent } from '../component/toast/textToast/text.toast';



@NgModule({
    declarations: [

        NavComponent,
        TableComponent,
        ButtonComponent,
        MenuComponent,
        DefaultToastComponent,
        DefaultDatePickComponent,
        ManagerComponent,
        TextToastComponent,
        DefaultPaginationComponent,
        RangePaginationComponent,
        DefaultTimePickComponent,
        FileUploadComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TabsModule.forRoot(),
        AppRoutingModule,
        NgZorroAntdModule,
    ],
    providers: [
        BsModalService,
        { provide: NZ_I18N, useValue: en_US }
    ],
})
export class ComponentModule { }
