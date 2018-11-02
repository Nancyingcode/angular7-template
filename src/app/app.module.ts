import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ComponentModule } from './module/component-module';
import { TextToastComponent } from './component/toast/textToast/text.toast';
import { AppRoutingModule } from './module/app-routing.module';
import { HttpsModule } from './http/http.module';
import { InterceptorModule } from './module/interceptor-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './module/page-module';
import { ServiceModule } from './module/service-module';
import { HttpService } from './http/http';
import { LoginService } from './service/login.service';
import { ToastService } from './service/toast.service';

import { NavComponent } from './component/nav/nav';



@NgModule({
  declarations: [
    // NavComponent,
  ],
  imports: [
    // ComponentModule,
    PageModule,
    // BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpsModule,
    FormsModule,
    ServiceModule,
    InterceptorModule,
    // BrowserAnimationsModule,
  ],
  providers: [
    HttpService,
    LoginService,
    ToastService
  ],
  bootstrap: [AppComponent],
  entryComponents: [TextToastComponent]
})
export class AppModule { }
