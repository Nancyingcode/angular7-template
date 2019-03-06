import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpService } from 'src/app/http/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { C2cDoneResult, C2cSellingResult } from './c2c.done';
import { Config, DefaultDataFormate, HttpType } from './index';

const { c2cDone, c2cSelling } = Config.apis;

@Injectable()
export class C2cService {

  constructor(private message: NzMessageService, private http: HttpService) {}

  /**
   * 已完成订单
   */
  getDoneOrderList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', c2cDone, {}, data).pipe(
      map((res: C2cDoneResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  /**
   * 寄售中订单
   */
  getSellingOrderList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', c2cSelling, {}, data).pipe(
      map((res: C2cSellingResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }
}
