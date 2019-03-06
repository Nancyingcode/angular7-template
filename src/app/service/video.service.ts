import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { last, map, tap } from 'rxjs/operators';
import { HttpService } from '../http/http';
import { VideoAddData, VideoDeleteData, VideoListData, VideoResult } from '../interface/video';
import { checkReq, Config, DefaultDataFormate, HttpResult, Log  } from './index';
import { LoginService } from './login.service';

const { host} = Config;
const {  videoList, videoAdd, videoUpload, videoDelete } = Config.apis;
const console = new Log('VideoService');

@Injectable()
export class VideoService {

  constructor(
    private http: HttpService,
    private ls: LoginService,
    private httpc: HttpClient) { }

  /**
   * 视频
   * @param data
   */
  getVideo(data: VideoListData): Observable<DefaultDataFormate> {
    const { page, size } = data;
    const sendData = { type: 3, page, size };
    return this.http.observableReq('get', videoList, {}, sendData).pipe(
      map((res: VideoResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  /**
   * 添加视频
   * @param data
   */
  addVideo(data: VideoAddData, progress?: (progress: number) => void, finish?: (progress: number) => void): Observable<any> {
    const { title, img, video } = data;
    const adminId = this.ls.getAdminId();
    const sendData = new FormData();
    sendData.append('title', title);
    sendData.append('img', img);
    sendData.append('file', video);
    sendData.append('adminId', adminId.toString());
    return this.httpc.request('post', `${host}${videoAdd}`, {
      body: sendData,
      reportProgress: true,
      observe: 'events'
    }).pipe(

      map(event => this.getEventMessage(event, video, progress)),
      tap(message => console.logger(message))
    );
  }

  private getEventMessage(event: HttpEvent<any>, file: File, progress?: (progress: number) => void): string {
    switch (event.type) {
      case HttpEventType.Sent:
        return `send`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(event.loaded * 100 / event.total);
        progress(percentDone);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `success`;

      default:
        return `failed`;
    }
  }

    /**
   * 删除
   * @param data
   */
  deleteVideo(data: VideoDeleteData): Observable<boolean> {
    const { id } = data;
    const adminId = this.ls.getAdminId();
    const sendData = { noticeId: id, adminId, type: 3 };
    return this.http.observableReq('post', videoDelete, sendData).pipe(
      map((res: HttpResult) => {
        if ( checkReq(res) ) {
          return true;
        }

        return false;
      })
    );
  }
}
