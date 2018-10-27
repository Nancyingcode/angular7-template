import { Component, Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';

import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent {
  title = 'app';
  template = '<div>sadads</div>';

  constructor(private loginS: LoginService) { }

  async login() {
    this.loginS.login();
  }
}
