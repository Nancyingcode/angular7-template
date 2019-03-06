import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { last, map, tap } from 'rxjs/operators';
import { HttpService } from '../http/http';
import { VideoAddData, VideoListData, VideoResult } from '../interface/video';
import { checkReq, Config, DefaultDataFormate, HttpResult, Log } from './index';
import { LoginService } from './login.service';

const { videoList, videoAdd, videoUpload } = Config.apis;
const { host } = Config;
const console = new Log('UploadService');

@Injectable()
export class UploadService {

  constructor(
    private http: HttpService,
    private ls: LoginService,
    private https: HttpClient) { }

  /**
   * 添加视频
   * @param data
   */
  uploadVideo(data: VideoAddData): Observable<any> {
    const { title, img, video } = data;
    const adminId = this.ls.getAdminId();
    const sendData = new FormData();
    sendData.append('title', title);
    sendData.append('img', img);
    sendData.append('file', video);
    sendData.append('adminId', adminId.toString());
    return this.https.request('post'
      , `${host}${videoUpload}`
      , {
        body: sendData
        , reportProgress: true
        , observe: 'events'
      }).pipe(
        map(event => this.getEventMessage(event, video)),
        tap(message => console.logger(message)),
        last() // return last (completed) message to caller
      );
  }

  uploadImage(data: any): Observable<any> {
    const { title, img } = data;
    const adminId = this.ls.getAdminId();
    const sendData = new FormData();
    sendData.append('title', title);
    sendData.append('img', img);
    sendData.append('adminId', adminId.toString());
    return this.https.request('post', `${host}${videoUpload}`, {
      body: sendData,
      reportProgress: true,
      observe: 'events'
    }).pipe(

      map(event => this.getEventMessage(event, img)),
      tap(message => console.logger(message)),
      last() // return last (completed) message to caller
    );
  }

  private getEventMessage(event: HttpEvent<any>, file: File): string {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(event.loaded * 100 / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }
}
