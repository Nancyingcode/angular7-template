import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './module/app-routing.module';
import { HttpsModule } from './http/http.module';
import { ComponentModule } from './module/component-module';
import { HttpService } from './http/http';
import { LoginService } from './service/login.service';



@NgModule({
  imports: [
    BrowserModule,
    HttpsModule,
    AppRoutingModule,
    ComponentModule,
    FormsModule
  ],
  providers: [
    HttpService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
