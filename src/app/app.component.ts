import { Component, Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';

import { HttpService } from './http/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';


  constructor(private http: HttpService) { }

  async getRes() {

  }
}
