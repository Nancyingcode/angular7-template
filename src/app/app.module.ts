import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TextToastComponent } from './component/toast/textToast/text.toast';
import { AppRoutingModule } from './module/app-routing.module';
import { HttpsModule } from './http/http.module';
import { InterceptorModule } from './module/interceptor-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './module/page-module';
import { HttpService } from './http/http';
import { LoginService } from './service/login.service';
import { ToastService } from './service/toast.service';



@NgModule({
  imports: [
    PageModule,
    BrowserModule,
    HttpsModule,
    AppRoutingModule,
    FormsModule,
    InterceptorModule,
    BrowserAnimationsModule
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
