import { registerLocaleData, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import zh from '@angular/common/locales/zh';
import { zh_CN, NZ_I18N } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { TabDirective } from './directive/tab.directive';
import { HttpService } from './http/http';
import {
  AppRoutingModule,
  DirectiveModule,
  HttpsModule,
  InterceptorModule,
  PageModule
} from './module';
import { LoginService, ToastService, ValueService } from './service';
import { ConfigService } from './service/config.service';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'zh'}),
    HttpsModule,
    FormsModule,
    InterceptorModule,
    AppRoutingModule,
    PageModule
  ],

  providers: [
    HttpService,
    LoginService,
    ConfigService,
    ToastService,
    ValueService,
    { provide: NZ_I18N, useValue: zh_CN }
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
