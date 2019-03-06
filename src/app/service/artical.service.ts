import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { last, map, tap } from 'rxjs/operators';
import { HttpService } from '../http/http';
import { ArticalDeleteData, ArticalResult } from '../interface/artical';
import { checkReq, Config, DefaultDataFormate, HttpResult, Log, VideoAddData, VideoListData, VideoResult } from './index';
import { LoginService } from './login.service';

const { host } = Config;
const { articalList, articalAdd, articalUpdate, articalDelete } = Config.apis;

const console = new Log('ArticalService');

@Injectable()
export class ArticalService {

  constructor(
    private http: HttpService,
    private ls: LoginService,
    private httpc: HttpClient) { }

  /**
   * 资讯列表
   * @param data
   */
  getArticalList(data: VideoListData): Observable<DefaultDataFormate> {
    const { page, size } = data;
    const sendData = { type: 2, page, size };
    return this.http.observableReq('get', articalList, {}, sendData).pipe(
      map((res: ArticalResult) => {
        const list = res.data.map(item => {
          return {
            ...item,
            imageBig: item.bigPicture,
            imageSmall: item.smallPicture
          };
        });

        return { list, count: 0 };
      })
    );
  }

  /**
   * 添加资讯
   * @param data
   */
  addArtical(data: any, callback?: (progress: number) => void): Observable<any> {
    const { title, img, htmlText } = data;
    const adminId = this.ls.getAdminId();
    const sendData = new FormData();
    sendData.append('title', title);
    sendData.append('img', img);
    sendData.append('htmlText', htmlText);
    sendData.append('adminId', adminId.toString());
    return this.httpc.request('post', `${host}${articalAdd}`, {
      body: sendData,
      reportProgress: true,
      observe: 'events'
    }).pipe(

      map(event => this.getEventMessage(event, img, callback)),
      tap(message => console.logger(message)),
      last() // return last (completed) message to caller
    );
  }

  /**
   * 更新资讯
   * @param data
   */
  updateArtical(data: any): Observable<boolean> {
    const { imageBig, imageSmall } = data;
    const sendData = { ...data, bigImg: imageBig, smallImg: imageSmall };
    return this.http.observableReq('post', articalUpdate, sendData).pipe(
      map((res: ArticalResult) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  private getEventMessage(event: HttpEvent<any>, file: File, callback?: (progress: number) => void): string {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(event.loaded * 100 / event.total);
        callback(percentDone);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

  /**
   * 删除
   * @param data
   */
  deleteArtical(data: ArticalDeleteData): Observable<boolean> {
    const { id } = data;
    const adminId = this.ls.getAdminId();
    const sendData = { noticeId: id, adminId, type: 2 };
    return this.http.observableReq('post', articalDelete, sendData).pipe(
      map((res: HttpResult) => {
        if ( checkReq(res) ) {
          return true;
        }

        return false;
      })
    );
  }
}
