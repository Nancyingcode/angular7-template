import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpsModule } from './http/http.module';
import { HttpService } from './http/http';
import { LoginService } from './service/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpsModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
