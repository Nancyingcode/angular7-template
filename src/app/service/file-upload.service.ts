import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FileUploadService {
  private fileSource: Subject<{}>;
  private dataSource: Subject<{}>;
  public file$: Observable<any>;
  public data$: Observable<any>;

  constructor() {
    this.fileSource = new Subject<{}>();
    this.dataSource = new Subject<{}>();
    this.file$ = this.fileSource.asObservable();
    this.data$ = this.dataSource.asObservable();
  }

  /**
   * 上传文件传递给父组件
   * @param file 文件
   */
  upload(file: any): void {
    this.fileSource.next(file);
  }

  /**
   * 请求参数传送给子组件
   * @param data 参数 { param }
   */
  data(data: any): void {
    this.dataSource.next(data);
  }
}
