import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { checkReq, formDate, Config, DefaultDataFormate, HttpType, InvestResult, LineUpData, LineUpResult } from '../http';
import { HttpService } from '../http/http';
import { LoginService } from './login.service';

const { investModifyNumber, lineUpList, investAdd } = Config.apis;

const lineUpStatus = {
  0: '申请中',
  1: '排单中',
  2: '打款中',
  3: '可收获',
  4: '已收获'
};

@Injectable()
export class LineUpService {

  constructor(private ls: LoginService, private http: HttpService) {}
  /**
   * 私募列表
   * @param data
   */
  getList(data: LineUpData): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', lineUpList, data).pipe(
      map((res: LineUpResult) => {
        const { lineUps, count } = res.data;
        const list = lineUps.map(item => {
          return {
            ...item,
            statusStr: lineUpStatus[item.status],
            startTimeStr: formDate(item.startTime)
          };
        });

        return { list, count };
      })
    );
  }

  /**
   * 添加私募
   * @param data
   */
  addInvest(data: any): Observable<boolean> {
    const sendData = { ...data };
    return this.http.observableReq('post', investAdd, sendData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 修改私募比例
   * @param data
   */
  modifyInvestNumber(data: any): Observable<boolean> {
    const adminId = this.ls.getAdminId();
    const sendData = { adminId, ...data };
    return this.http.observableReq('post', investModifyNumber, sendData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }
}
