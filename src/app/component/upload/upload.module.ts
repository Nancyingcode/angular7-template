import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginService } from 'src/app/pages';
import { UploadService } from 'src/app/service/upload.service';
import { FileUploadComponent } from './file.upload/file.upload';
import { UploadComponent } from './upload/upload';

@NgModule({
  declarations: [ FileUploadComponent, UploadComponent ],
  exports     : [ FileUploadComponent, UploadComponent ],
  imports     : [ CommonModule, NgZorroAntdModule ],
  providers   : [ UploadService, LoginService ]
})

export class UploadModule {}
