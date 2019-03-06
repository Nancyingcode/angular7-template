import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { checkReq, Config, DefaultDataFormate, DefaultDetailDataFormate, HttpType, InvestDataFormate, InvestResult } from '../http';
import { HttpService } from '../http/http';
import { LoginService } from './login.service';

const { investModifyNumber, investList, investAdd } = Config.apis;

@Injectable()
export class InvestService {

  constructor(private ls: LoginService, private http: HttpService) {}
  /**
   * 私募列表
   * @param data
   */
  getInvestList(data: any): Observable<InvestDataFormate> {
    return this.http.observableReq('post', investList, data).pipe(
      map((res: InvestResult) => {
        const { privatePlacementList, eth2wsbc } = res.data;
        return { list: privatePlacementList.content, count: privatePlacementList.totalElements, proportion: eth2wsbc };
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
