import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../http/http';
import {
  checkReq, Config,
  CurrencyCheckData,
  CurrencyCheckOrderResult,
  CurrencyDoneOrderResult,
  CurrencyLockOrderResult,
  CurrencyRequestData,
  CurrencyRequestOrderResult,
  CurrencySellingOrderResult,
  DefaultDataFormate,
  DefaultDetailDataFormate
} from './index';

const {
  currencyCheckList,
  currencyDoneList,
  currencyLockList,
  currencySellingList,
  currencyRequestList,
  currencyRequestModify,
  currencyDetail,
  currencyCancel,
  currencyConfirm
} = Config.apis;

@Injectable()
export class CurrencyService {

  constructor(private http: HttpService) { }

  /**
   * 审核中订单
   * @param data
   */
  getCheckList(data: CurrencyCheckData): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', currencyCheckList, data).pipe(
      map((res: CurrencyCheckOrderResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  getCheckListDetail(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('get', currencyDetail, {}, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 已完成订单
   * @param data
   */
  getDoneList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', currencyDoneList, data).pipe(
      map((res: CurrencyDoneOrderResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  getDoneDetail(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', currencyDetail, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 锁定中订单
   * @param data
   */
  getLockList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', currencyLockList, {}, data).pipe(
      map((res: CurrencyLockOrderResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  getLockDetail(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', currencyDetail, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 寄售中订单
   * @param data
   */
  getSellingList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', currencySellingList, data).pipe(
      map((res: CurrencySellingOrderResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  getSellingDetail(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', currencyDetail, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 申述中订单
   * @param data
   */
  getRequestList(data: CurrencyRequestData): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', currencyRequestList, data).pipe(
      map((res: CurrencyRequestOrderResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  getRequestModifyList(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', currencyDetail, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 已取消类订单
   */
  getCancelList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', currencySellingList, {}, data).pipe(
      map((res: CurrencySellingOrderResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  /**
   * 取消订单详情
   * @param data
   */
  getCancalDetail(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', currencyDetail, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 驳回类订单
   */
  getRefuseList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', currencySellingList, {}, data).pipe(
      map((res: CurrencySellingOrderResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  /**
   * 驳回订单详情
   * @param data
   */
  getRefuseDetail(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', currencyDetail, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 取消订单
   * data
   */
  cancel(data: any): Observable<boolean> {
    return this.http.observableReq('post', currencyCancel, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 确认订单
   */
  confirm(data: any): Observable<boolean> {
    return this.http.observableReq('post', currencyConfirm, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

    /**
   * 订单详情
   * @param data
   */
  getOrderDetail(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', currencyDetail, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

}
