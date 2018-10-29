import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from '../interceptor/login.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
];

@NgModule({
    providers: [
        httpInterceptorProviders
    ]
})
export class InterceptorModule { }
