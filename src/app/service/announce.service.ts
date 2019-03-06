import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { checkReq, AnnounceAddData, AnnounceResult, Config, DefaultDataFormate, DefaultDetailDataFormate, HttpType } from '../http';
import { HttpService } from '../http/http';
import { LoginService } from './login.service';

const { announcementInfo, announcementAdd, announcementDelete, announcementUpdate } = Config.apis;

@Injectable()
export class AnnounceService {

  constructor(private ls: LoginService, private http: HttpService) {}
  /**
   * 公告列表
   * @param data
   */
  getAnnouncementList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', announcementInfo, {}, data).pipe(
      map((res: AnnounceResult) => {
        const { notices, count } = res.data;
        return { list: notices, count };
      })
    );
  }

  /**
   * 添加公告
   * @param data
   */
  addAnnouncement(data: AnnounceAddData): Observable<boolean> {
    const sendData = { ...data };
    return this.http.observableReq('post', announcementAdd, sendData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 更新公告
   * @param data
   */
  updateAnnouncement(data: any): Observable<boolean> {
    return this.http.observableReq('post', announcementUpdate, data).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 删除公告
   * @param data
   */
  deleteAnnouncement(data: any): Observable<boolean> {
    const adminId = this.ls.getAdminId();
    const sendData = { adminId, noticeId: data.id, type: 1 };
    return this.http.observableReq('post', announcementDelete, sendData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }
}
