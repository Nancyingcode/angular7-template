import { Component, Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';

import { HttpService } from './http/http';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';


  constructor(private loginS: LoginService) { }

  async getRes() {

  }

  async login() {
    this.loginS.login();
  }
}
