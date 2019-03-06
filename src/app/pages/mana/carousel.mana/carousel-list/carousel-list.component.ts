import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';

import { FileUploadService, FormGroupService, HomeService } from '../service';
import { Config, NormalButton, PointerButton, UploadProp } from './index';

const { host, apis } = Config;
const { updateCarousel } = apis;

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.less']
})

export class CarouselListComponent implements OnInit {

  public props: PointerButton;
  public buttons: NormalButton[];
  public uploadProps: UploadProp;
  public carouselForm: FormGroup;
  public action: string;
  public imagePath: string;
  public data: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private hs: HomeService,
    private fgs: FormGroupService,
    private fus: FileUploadService,
    private route: ActivatedRoute) {
    this.action = `${host}${updateCarousel}`;

    this.buttons = [
      {
        name: '提交',
        type: 'submit',

        // 已经绑定submit所以这里为空函数
        callback: () => { }
      },
      {
        name: '返回',
        type: 'button',
        callback: () => {
          this.go();
        }
      }
    ];

    this.uploadProps = {
      action: `${host}/api/bgSystemManager/uploadGoodsImg`,
      callback: this.setImagePath
    };

    this.carouselForm = this.fb.group(
      {
        goodsImg: ['', Validators.required]
      }
    );
  }

  async ngOnInit(): Promise<any> {
    const data = await this.getData();
    await this.setData(data);
  }

  async getData(): Promise<any> {
    const res = await this.hs.getCarouselList();
    return res;
  }

  async setData(data: any): Promise<any> {
    data.map(item => item.url = item.content);
    this.data = data;
  }

  setImagePath = ({ data }, { name }) => {
    if (data) {
      if (data.hasOwnProperty('nginxPath')) {
        const patchValue = {};
        patchValue[name] = data.nginxPath;
        this.carouselForm.patchValue({ ...patchValue });
      }
    }
  }

  remove = (file: UploadFile) => {

  }

  go = () => {
    // this.router.navigate([marketL]);
  }
}
