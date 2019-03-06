import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { checkReq, AnnounceAddData, AnnounceData, AnnounceResult, AnnounceUpdateData, Config, DefaultDataFormate, DefaultDetailDataFormate, HttpType, RuleNumberResult, TotalResult } from '../http';
import { HttpService } from '../http/http';
import { LoginService } from './login.service';
const {
  carouselInfo,
  carouselUpdate,
  carouselDelete,
  orderInfo,
  announcementInfo,
  announcementAdd,
  announcementDelete,
  announcementUpdate,
  rulePriceList,
  ruleList,
  registerRulePriceUpdate,
  initCodeModify,
  userCodeModify,
  totalInfo,
  propList,
  propUpdate,
  homepage,
  updateLineUp,
  updateRewardTime
} = Config.apis;

@Injectable()
export class HomeService {

  constructor(private http: HttpService, private ls: LoginService) { }

  async getCarouselList(): Promise<any> {
    const res = await this.http.req('get', carouselInfo, {});
    return res.data;
  }

  async getHomepagelList(): Promise<any> {
    const res = await this.http.req('get', homepage, {});
    return res.data;
  }

  async updateCarousel(data: any): Promise<any> {
    return await this.http.req('get', carouselUpdate, data);
  }

  async deleteCarousel(data: any): Promise<any> {
    return await this.http.req('post', carouselDelete, data);
  }

  async getOrderDetail(): Promise<any> {
    const res = await this.http.req('get', carouselInfo, {});
    return res.data;
  }

  async getOrderList(): Promise<any> {
    const res = await this.http.req('get', orderInfo, {});
    return res.data;
  }

  async getPropList(data: any): Promise<any> {
    const res = await this.http.req('post', propList, data);
    return res.data;
  }

  async updateProp(data: any): Promise<any> {
    return await this.http.req('post', propUpdate, data);
  }

  /**
   * 公告列表
   * @param data
   */
  getAnnouncementList(data: AnnounceData): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', announcementInfo, data).pipe(
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
    const adminId = this.ls.getAdminId();
    const sendData = { ...data, adminId: adminId.toString() };
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
  updateAnnouncement(data: AnnounceUpdateData): Observable<boolean> {
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
    // const adminId = this.ls.getAdminId();
    const sendData = { id: data.id };
    return this.http.observableReq('post', announcementDelete, sendData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 规则参数
   */
  getPriceList(): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', ruleList, {}, {}).pipe(
      map((res: RuleNumberResult) => {
        if (checkReq(res)) {
          return { data: res.data};
        }

        return { data: {}};
      })
    );
  }

  updateRule(data: any): Observable<boolean> {
    const { param, value } = data;
    const sendData = { paramName: param, paramValue: value };
    return this.http.observableReq('post', registerRulePriceUpdate, sendData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 业务码修改记录
   */
  getInitCodeModifyList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', initCodeModify, {}, data).pipe(
      map((res: AnnounceResult) => {
        if (res.data) {
          return { list: res.data, count: 1 };
        }

        return { list: [], count: 0 };
      })
    );
  }

    /**
   * 业务码修改记录
   */
  getUserCodeModifyList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', userCodeModify, data).pipe(
      map((res: AnnounceResult) => {
        if (res.data) {
          return { list: [], count: 0 };
        }

        return { list: [], count: 0 };
      })
    );
  }

  updateLineUp(data: any): Observable<boolean> {
    const { lineUpTime } = data;
    const sendData = {  day: lineUpTime };
    return this.http.observableReq('post', updateLineUp, sendData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  updateRewardTime(data: any): Observable<boolean> {
    const { rewardTime } = data;
    const sentData = { day: rewardTime };
    return this.http.observableReq('post', updateRewardTime, sentData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 获取统计信息
   */
  getTotalInfo(): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', totalInfo, {}, {}).pipe(
      map((res: TotalResult) => {
        if (checkReq(res)) {
          return { data: res.data};
        }

        return { data: {}};
      })
    );
  }
}
