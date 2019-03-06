import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService, UploadFile, UploadXHRArgs } from 'ng-zorro-antd';
// import 'rxjs/add/observable/empty';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/http/http';
import { FileUploadService } from 'src/app/pages';
import { HomeService } from 'src/app/service/home.service';
import { checkReq, Config, Log, UploadProp } from '../index';
const { updateCarousel, updateCarouselBase64 } = Config.apis;
const { host } = Config;
const console = new Log('FileUploadComponet');

@Component({
  selector: 'app-image-upload',
  templateUrl: './file.upload.html',
  styleUrls: ['./file.upload.less']
})

export class FileUploadComponent implements OnInit {
  @Input() props: UploadProp;
  @Input() uploadType: string;
  @Input() name: string;
  @Input() action: string;
  @Input() data: any;
  public previewImage: string;
  public fileName: string;
  public previewVisible: boolean;
  public fileType: any;
  public fileList: any;

  constructor(
    private http: HttpClient,
    private https: HttpService,
    private fus: FileUploadService,
    private message: NzMessageService) {
    this.uploadType = 'default';
    this.previewImage = '';
    this.fileName = 'image';
    this.previewVisible = false;
    this.fileType = 'image/png,image/bmp,image/jpeg,image/jpg';
    this.fileList = [];
    this.props = {
      action: '',
      callback: () => {}
    };
  }

  ngOnInit(): void {
    if (this.data) {
      if (this.data.url) {
        this.setPreviewImage();
      }
    }
  }

  async postBase64(data: any): Promise<any> {
    return await this.https.req('post', `${updateCarouselBase64}`, data);
  }

  setPreviewImage(): void {
    this.fileList = [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: `${this.data.url}`
      }
    ];
  }

  changeFileExtension(fileName: string): string {
    const pos = fileName.lastIndexOf('.');
    return fileName.substr(0, pos < 0 ? fileName.length : pos) + '.png';
  }

  cusUpload = (item: UploadXHRArgs) => {
    const formData = new FormData();

    // tslint:disable-next-line:no-any
    formData.append('test', item.file as any);
    const req = new HttpRequest('POST', `${this.action}`, formData, {
      reportProgress: true,
      withCredentials: true
    });

    return this.http.request(req).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total > 0) {

          // tslint:disable-next-line:no-any
          (event as any).percent = event.loaded / event.total * 100;
        }

        item.onProgress(event, item.file);
      } else if (event instanceof HttpResponse) {

        // 处理成功
        if (checkReq(event.body)) {
          this.message.success('上传图成功,提交后才会更新');
          this.fus.upload({ name: this.name, url: event.body.data });
          item.onSuccess(event.body, item.file, event);
          return;
        }

        this.message.error('上传图片失败，请重试，如屡试不行，请联系开发者');
      }
    }, (err) => {
      // 处理失败
      item.onError(err, item.file);
    });
  }

  cusBannerUpload = (item: UploadXHRArgs) => {
    const formData = new FormData();

    formData.append('id', this.data.id);
    formData.append('test', item.file as any);
    const req = new HttpRequest('POST', `${this.action}`, formData, {
      reportProgress: true,
      withCredentials: true
    });

    return this.http.request(req).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total > 0) {

          // tslint:disable-next-line:no-any
          (event as any).percent = event.loaded / event.total * 100;
        }

        item.onProgress(event, item.file);
      } else if (event instanceof HttpResponse) {

        // 处理成功
        if (checkReq(event.body)) {
          this.message.success('更换轮播图图成功');
          this.fus.upload({ name: this.name, url: event.body.data });
          item.onSuccess(event.body, item.file, event);
          return;
        }

        this.message.error('上传图片失败，请重试，如屡试不行，请联系开发者');
      }
    }, (err) => {
      // 处理失败
      item.onError(err, item.file);
    });
  }

  handleRemove = (file: UploadFile) => {
    // this.props.remove(file);
    this.message.warning('选择新的图片');
    return true;
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      // this.loading = true;
      return;
    }

    if (info.file.status === 'done') {

    }
  }
}
