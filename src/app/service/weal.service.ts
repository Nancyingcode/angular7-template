import { Injectable } from '@angular/core';

import { HttpService } from '../http/http';
import { Config } from '../config/config';
const {
  replyList,
  replyRespone,
  weal
} = Config.apis;

@Injectable()
export class WealService {

  constructor(private http: HttpService) { }

  async getWealList(data: any) {
    const res = await this.http.req('post', weal, data);
    return res.data;
  }

  async getEthList(data: any) {
    const res = await this.http.req('post', replyList, data);
    return res.data;
  }

  async getUsdtList(data: any) {
    const res = await this.http.req('post', replyList, data);
    return res.data;
  }

  async responeReply(data: any) {
    const res = await this.http.req('post', replyRespone, data);
    return res.data;
  }

}
