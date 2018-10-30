import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '../interceptor/http.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];

@NgModule({
    providers: [
        httpInterceptorProviders
    ]
})
export class InterceptorModule { }
