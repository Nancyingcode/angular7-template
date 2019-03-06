import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../config/config';
import { HttpService } from '../http/http';
import { DefaultDataFormate, HttpType } from './index';
const { replyList, replyRespone } = Config.apis;

@Injectable()
export class ReplyService {

  constructor(private http: HttpService) { }

  /**
   * 获取留言列表
   * @param data
   */
  getReply(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', replyList, data).pipe(
      map((res: HttpType) => {
        return { list: '', count: 0 };
      })
    );
  }

  /**
   * 回复留言
   * @param data
   */
  responeReply(data: any): Observable<boolean> {
    return this.http.observableReq('post', replyList, data).pipe(
      map((res: HttpType) => {
        return true;
      })
    );
  }

}
