import { Component, OnInit } from '@angular/core';
import { HttpService } from './http/http';

import { Config, Log } from './index';
const { host } = Config;
const { testStatic, testStaticList } = Config.apis;
const console = new Log('AppComponent');

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.less']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    // this.http.post(`${host}/test${testStatic}`, {}).subscribe(item => console.log(item));
    // this.http.get(`${host}/test${testStaticList}`, {}, {}).subscribe(item => console.logger(item));
  }
}
