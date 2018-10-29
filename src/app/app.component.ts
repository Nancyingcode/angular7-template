import { Component, Injectable, TemplateRef, ViewChild } from '@angular/core';

import { DefaultToastComponent } from './component/toast/defaultToast/default.toast';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent {
  title = 'app';
  template: any;

  @ViewChild(DefaultToastComponent)
  private toast: DefaultToastComponent;
  // constructor(private loginS: LoginService) { }

  // async login() {
  //   this.loginS.login();
  // }

  showToast() {
    this.toast.showModal();
  }
}
