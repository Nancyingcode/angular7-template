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
import { MessageToastComponent } from '../component/toast/messageToast/message.toast';
import { NormalButtonComponent } from '../component/button/buttonNormal/normal.button';
import { ButtonPointerComponent } from '../component/button/button.pointer/button.pointer';
import { DashComponent } from '../component/dashborad/dash';
import { ManagerComponent } from '../pages/user/manager';
import { SearchInputComponent } from '../component/input/search.input';
import { SmallButtonComponent } from '../component/button/button.small/button.small';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { TextToastComponent } from '../component/toast/textToast/text.toast';
import { ListComponent } from '../component/menu/list/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableListComponent } from '../component/table/table.list/table.list';
import { ServiceModule } from './service-module';



@NgModule({
    declarations: [
        NavComponent,
        TableComponent,
        ButtonComponent,
        ButtonPointerComponent,
        SmallButtonComponent,
        TableListComponent,
        ListComponent,
        MenuComponent,
        DefaultToastComponent,
        DefaultDatePickComponent,
        ManagerComponent,
        TextToastComponent,
        DefaultPaginationComponent,
        RangePaginationComponent,
        DefaultTimePickComponent,
        FileUploadComponent,
        MessageToastComponent,
        NormalButtonComponent,
        DashComponent,
        SearchInputComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ServiceModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TabsModule.forRoot(),
        AppRoutingModule,
        NgZorroAntdModule,
    ],
    exports: [
        AppRoutingModule,
        ServiceModule,
        NgZorroAntdModule,
        BrowserAnimationsModule,
        NavComponent,
        TableComponent,
        TableListComponent,
        ButtonComponent,
        SmallButtonComponent,
        ButtonPointerComponent,
        ListComponent,
        MenuComponent,
        DefaultToastComponent,
        DefaultDatePickComponent,
        ManagerComponent,
        TextToastComponent,
        DefaultPaginationComponent,
        RangePaginationComponent,
        DefaultTimePickComponent,
        FileUploadComponent,
        MessageToastComponent,
        NormalButtonComponent,
        DashComponent,
        SearchInputComponent
    ],
    providers: [
        BsModalService,
        { provide: NZ_I18N, useValue: en_US }
    ],
})
export class ComponentModule { }
