import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import md5 from 'js-md5';
import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../http/http';
import { checkReq, hasOwnProperty, Config, HttpType, Log, UserInfo } from './index';
const console = new Log('login');
const { login } = Config.apis;
const { USER_INFO } = Config;

@Injectable()
export class LoginService {
  public isLogin = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpService,
    private router: Router,
    private message: NzMessageService) { }

  login({ username, password }: any): Observable<boolean> {
    const userInfo = { account: username, loginPassword: md5(password) };
    return this.http.observableReq('post', login, userInfo).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          if (isPlatformBrowser(this.platformId)) {
            sessionStorage.setItem(USER_INFO, JSON.stringify({ admin: res.data, token: res.token }));
            return true;
          }

          return true;
        }

        return false;
      })
    );
  }

  getUserInfo(): UserInfo {
    let userInfoStr: string;
    if (isPlatformBrowser(this.platformId)) {
      userInfoStr = sessionStorage.getItem(USER_INFO);
    }

    if (userInfoStr) {
      return JSON.parse(userInfoStr);
    }

    return { admin: { id: 0, type: 2, phone: '' }, token: '' };
  }

  /**
   * adminId
   */
  getAdminId(): number {
    const userInfo = this.getUserInfo();
    if (hasOwnProperty(userInfo, 'admin')) {
      if (hasOwnProperty(userInfo.admin, 'id')) {
        return userInfo.admin.id;
      }
    }

    return 0;
  }

  getAdminPhone(): string {
    const userInfo = this.getUserInfo();
    if (hasOwnProperty(userInfo, 'admin')) {
      if (hasOwnProperty(userInfo.admin, 'phone')) {
        return userInfo.admin.phone;
      }
    }

    return '';
  }

  getAdminType(): number {
    const userInfo = this.getUserInfo();
    if (hasOwnProperty(userInfo, 'admin')) {
      if (hasOwnProperty(userInfo.admin, 'type')) {
        return userInfo.admin.type;
      }
    }

    return 0;
  }

  /**
   * token | string
   */
  getToken(): string {
    const userInfo = this.getUserInfo();
    if (hasOwnProperty(userInfo, 'admin')) {
      if (hasOwnProperty(userInfo.admin, 'id')) {
        return userInfo.token;
      }
    }

    return '';
  }

  formStrToJson(data: string): {} {
    return JSON.parse(data);
  }

  getJsonStr(obj: {}): string {
    return JSON.stringify(obj);
  }

  getJson(obj: {}): {} {
    return JSON.parse(JSON.stringify(obj));
  }
}
