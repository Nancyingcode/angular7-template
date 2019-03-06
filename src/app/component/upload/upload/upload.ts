import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService, UploadFile, UploadXHRArgs } from 'ng-zorro-antd';
// import 'rxjs/add/observable/empty';
import { forkJoin, Observable } from 'rxjs';
import { filter, last, map, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/http/http';
// import { ArticalUploadService } from 'src/app/pages/mana/artical.mana/artical-upload.service';
import { FileUploadService, LoginService, UploadService } from '../../service';
import { Config, Log, UploadProp } from './index';

const { host } = Config;
const { videoUpload } = Config.apis;
const console = new Log('UploadComponent');

@Component({
  selector: 'app-upload',
  templateUrl: './upload.html',
  styleUrls: ['./upload.less']
})

export class UploadComponent implements OnInit {
  @Input() props: UploadProp;
  @Input() uploadType: string;
  @Input() action: string;
  @Input() success: any;
  public uploading: boolean;
  public progress: number;
  public fileList: UploadFile[] = [];
  public articalImage: UploadFile[] = [];

  constructor(
    private http: HttpClient,
    private https: HttpService,
    private us: UploadService,
    private as: FileUploadService,
    private ls: LoginService,
    private message: NzMessageService) {
    this.uploadType = 'later';
    this.uploading = false;
    this.progress = 0;
  }

  ngOnInit(): void {

  }

  customBigReq = (item: UploadXHRArgs) => {
    const size = item.file.size;
    const chunkSize = parseInt((size / 3) + '', 10);
    const maxChunk = Math.ceil(size / chunkSize);
    const reqs = Array(maxChunk).fill(0).map((v: {}, index: number) => {
      const start = index * chunkSize;
      let end = start + chunkSize;
      if (size - end < 0) {
        end = size;
      }

      const formData = new FormData();
      formData.append('file', item.file.slice(start, end));
      formData.append('start', start.toString());
      formData.append('end', end.toString());
      formData.append('index', index.toString());
      const req = new HttpRequest('POST', item.action, formData, {
        withCredentials: true
      });

      return this.https.observableReq('post', item.action, formData);
    });

    return forkJoin(...reqs).subscribe(resules => {
      // 处理成功
      item.onSuccess({}, item.file, event);
    }, (err) => {
      // 处理失败
      item.onError(err, item.file);
    });
  }

  /**
   * 处理分步上传
   */
  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    switch (this.uploadType) {
      case 'image': {
        this.as.upload({ type: this.uploadType, file });
        break;
      }

      default: {
        this.as.upload(file);
      }
    }

    return false;
  }

  /**
   * 视频上传
   */
  handleUpload(): void {
    // const formData = new FormData();

    // this.uploading = true;

    // const adminId = this.ls.getAdminId();
    // const [img, video] = this.fileList;
    // const sendData = new FormData();

    // sendData.append('title', '');
    // sendData.append('img', img as any);
    // sendData.append('file', video as any);
    // sendData.append('adminId', adminId.toString());
    this.as.upload(this.fileList[0]);
    // this.upload(sendData, 'file', `${host}${videoUpload}`);
  }

  addArtical(data: any): Observable<any> {
    const formData = new FormData();
    this.uploading = true;
    const adminId = this.ls.getAdminId();
    const [img] = this.articalImage;

    formData.append('title', data.title);
    formData.append('img', img as any);
    formData.append('adminId', adminId.toString());
    return this.upload(formData, 'img', `${host}${videoUpload}`);
  }

  /**
   * 上传的通用方法
   * @param data  数据
   * @param key   文件字段名
   * @param url   上传地址
   */
  upload(data: FormData, key: string, url: string, callback?: () => {}): Observable<any> {
    return this.http.request('post', url, {
      body: data,
      reportProgress: true,
      observe: 'events'
    }).pipe(

      map(event => this.getEventMessage(event, data.get(key) as any)),
      tap(message => console.logger(message)),
      last()
    );
  }

  private getEventMessage(event: HttpEvent<any>, file: File, callback?: () => {}): string {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(event.loaded * 100 / event.total);
        callback();
        this.setProgress(percentDone);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        this.uploading = false;
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

  setProgress(percentNumber: number): void {
    this.progress = percentNumber;
  }

  handleChange(event: HttpEvent<any>): any {
    console.log('change', event);
    this.as.upload(this.fileList[0]);
  }
}
