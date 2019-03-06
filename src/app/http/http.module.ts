import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './http';

@NgModule({
  imports: [
    // BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  exports: [HttpModule]
})

export class HttpsModule { }
