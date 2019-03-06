import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { en_US, NgZorroAntdModule, NZ_I18N, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';

import {
  ButtonModule,
  DashboradModule,
  InputModule,
  MenuModule,
  NavModule,
  TableModule,
  TreeModule,
  UploadModule
} from '../component';
import { ContainerModule } from '../component/container/container.module';
import { DynamicTemplateModule } from '../component/dynamic.temple/dynamic-template.module';
import { LabelModule } from '../component/label/label.module';
import { ValidatorModule } from '../component/validate/validator.module';
import { WysiwygModule } from '../component/wysiwyg/wysiwyg.module';
import { ServiceModule } from './service-module';

@NgModule({
  imports     : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    RouterModule,
    NgZorroAntdModule,
    ValidatorModule,
    LabelModule,
    NavModule,
    ButtonModule,
    ContainerModule,
    InputModule,
    TableModule,
    MenuModule,
    DashboradModule,
    DynamicTemplateModule,
    UploadModule,
    TreeModule,
    WysiwygModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    NgZorroAntdModule,
    ValidatorModule,
    LabelModule,
    NavModule,
    ButtonModule,
    DynamicTemplateModule,
    ContainerModule,
    InputModule,
    TableModule,
    MenuModule,
    DashboradModule,
    UploadModule,
    TreeModule,
    WysiwygModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class ComponentModule { }
