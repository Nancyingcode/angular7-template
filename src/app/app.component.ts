import { Component, Injectable, TemplateRef, ViewChild, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DefaultToastComponent } from './component/toast/defaultToast/default.toast';
import { LoginService } from './service/login.service';
import { ToastService } from './service/toast.service';
import { TextToastComponent } from './component/toast/textToast/text.toast';

import { Log } from './tools/console';
const console = new Log('AppComponent');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent implements OnInit {
  title = 'app';
  template: any;

  constructor(private loginS: LoginService, injector: Injector, public toasts: ToastService) {
    // const ToastElement = createCustomElement(TextToastComponent, { injector });
    // customElements.define('popup-element', ToastElement);
  }

  ngOnInit() {
    // this.show();
    this.login();
  }

  async login() {
    this.loginS.login();
  }

  show() {
    // this.toasts.showToast('Confirm', 'Are u sure?', function () {
    //   console.log('ok');
    // }, function () {
    //   console.log('cancel');
    // });
  }
}
