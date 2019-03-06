import { Injectable, Input } from '@angular/core';
import { HttpService } from '../http/http';

import md5 from 'js-md5';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminAddData, AdminDeleteData, AdminPaymentResult, AdminPaymentUpdateData, AdminResult, AdminUpdateData } from '../http';
import { adminLevel, checkReq, Config, DefaultDataFormate, HttpType, Log } from './index';
import { LoginService } from './login.service';

const { adminInfo, adminAdd, adminDelete, adminUpdate, adminPayment, adminPaymentUpdate } = Config.apis;
const console = new Log('AdminService');

@Injectable()
export class AdminService {

  constructor(
    private http: HttpService,
    private message: NzMessageService,
    private ls: LoginService) { }

  /**
   * 管理员列表
   * @param data 请求参数 {}
   */
  getList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', adminInfo, data).pipe(
      map((res: AdminResult) => {
        const { emps, count } = res.data;
        const list = emps.map(item => {
          return {
            id: item.id,
            account: item.account,
            username: item.realName,
            password: item.password,
            typeStr: adminLevel[item.type],
            lastLoginTime: item.lastLoginTime
          };
        });

        return { list, count };
      })
    );
  }

  /**
   * 添加管理员
   * @param data
   */
  addManager(data: AdminAddData): Observable<boolean> {
    const { username, account, adminPassword, type } = data;
    const adminId = this.ls.getAdminId();
    const postData = {
      adminId,
      username,
      account,
      realName: username,
      type: parseInt(type, 10),
      password: md5(adminPassword)
    };

    return this.http.observableReq('post', adminAdd, postData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 删除管理员
   * @param data
   */
  deleteManager(data: AdminDeleteData): Observable<boolean> {
    const adminId = this.ls.getAdminId();
    const postData = { ...data, adminId };
    return this.http.observableReq('post', adminDelete, postData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 更新管理员
   * @param data
   */
  updateManager(data: AdminUpdateData): Observable<boolean> {
    const { id, newPassword, account, username, type} = data;
    const adminId = this.ls.getAdminId();
    const postData = {
      adminId,
      id,
      username,
      account,
      password: md5(newPassword)
    };

    return this.http.observableReq('post', adminUpdate, postData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  getPaymentList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', adminPayment, data).pipe(
      map((res: AdminPaymentResult) => {
        return { list: [res.data], count: 1 };
      })
    );
  }

  /**
   * 更新收款方式
   * @param data
   */
  updatePayment(data: AdminPaymentUpdateData): Observable<boolean> {
    const { bankCard } = data;
    const postData = { ...data, card: bankCard };
    return this.http.observableReq('post', adminPaymentUpdate, postData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          this.message.success('更新成功');
          return true;
        }

        this.message.error('更新失败');
        return false;
      })
    );
  }
}
