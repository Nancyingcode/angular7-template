import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { PromiseState } from 'q';
import { NormalButton, PointerButton } from 'src/app/interface/component';
import { MarketService } from 'src/app/service/market.service';
import { hasOwnProperty } from '../item.add';
import {
  checkForm,
  checkUndirtyForm,
  Config,
  FormItem,
  Log, UploadProp
} from './index';
const { market, marketAdd, marketUpdate } = Config.userMana;
const { host } = Config;
const { upload } = Config.apis;
const console = new Log('ItemUpdateComponent');

@Component({
  selector: 'app-item-update',
  templateUrl: './item.update.html',
  styleUrls: ['./item.update.less']
})

export class ItemUpdateComponent implements OnInit {
  private itemId: number;
  public props: PointerButton;
  public list: FormItem[];
  public buttons: NormalButton[];
  public uploadProps: UploadProp;
  public itemUpdateForm: FormGroup;
  public imagePath: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private ms: MarketService,
    private route: ActivatedRoute) {
    this.itemId = 0;
    this.list = FormItem;
    this.props = {
      alert: ['商城管理', '产品列表', '修改产品信息'],
      callback: () => {
        this.go();
      }
    };

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
        style: 'default',
        callback: () => {
          this.go();
        }
      }
    ];

    this.uploadProps = {
      action: `${upload}`,
      callback: this.setImagePath
    };

    this.itemUpdateForm = this.fb.group(
      {
        goodsId: [null, Validators.required],
        name: [null, Validators.required],
        bigPicture: [null, Validators.required],
        smallPicture: [null, Validators.required],
        price: [null, Validators.required],
        describe: [null, Validators.required],
        inventory: [null, Validators.required],
        reward: [null, Validators.required],
        type: [null, Validators.required]
      }
    );
  }

  ngOnInit(): void {
    this.getParams();
    this.viewImage();
  }

  submit(): void {
    this.updateItem();
  }

  async updateItem(): Promise<any> {
    try {
      const { itemUpdateForm } = this;
      if (!checkForm(itemUpdateForm)) {

        // 如果表单没有操作过，让其变为已操作dirty
        checkUndirtyForm(itemUpdateForm);
        return false;
      }

      // 赋值
      const { value } = itemUpdateForm;
      this.setId();
      const data = { ...value, id: this.itemId };
      const res = await this.ms.updateItem(data);

      if (res.code === 200) {
        this.message.success('修改商品成功');
        this.router.navigate([market]);
        return;
      }

    } catch (e) {
      this.message.error('服务器响应异常，请稍后再试');
    }
  }

  getParams(): void {
    this.route.params.subscribe(item => {
      const patchValue = {};
      for (const key in item) {
        if (item.hasOwnProperty(key)) {

          // 给patchValue对象添加属性
          patchValue[key] = item[key];

        }
      }

      this.itemUpdateForm.patchValue({ ...patchValue });
    });
  }

  setId(): void {
    this.route.params.subscribe(item => {
      this.itemId = item.id;
    });
  }

  viewImage(): void {
    this.route.params.subscribe(item => {
      this.list.map(prop => {
        const { name } = prop;

        // 对图片的项添加url
        if (name.indexOf('Picture') !== -1) {

          // 如果是图片对应匹配url
          prop.url = item[name];
        }

        return prop;
      });
    });
  }

  setImagePath = ({ data }, { name }) => {
    if (data) {
      const patchValue = {};
      patchValue[name] = data;
      this.itemUpdateForm.patchValue({ ...patchValue });
    }
  }

  go = () => {
    this.router.navigate([market]);
  }
}
