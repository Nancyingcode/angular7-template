import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { checkReq } from '../item.list';
import {
  checkForm,
  checkUndirtyForm,
  Config,
  FormItem,
  Log,
  MarketService,
  UploadProp
} from './index';
const console = new Log('ItemUpdateComponent');
const { market } = Config.userMana;

@Component({
  selector: 'app-item-add',
  templateUrl: './item.add.html',
  styleUrls: ['./item.add.less']
})

export class ItemAddComponent {
  public uploadProps: UploadProp;
  public previewImage = '';
  public previewVisible = false;
  public preImageApi = 'https://jsonplaceholder.typicode.com/posts/';
  public props = {
    alert: ['商城管理', '产品列表', '上架产品'],
    callback: () => {
      this.go(market);
    }
  };

  public buttons = [
    {
      name: '提交',
      type: 'submit',
      callback: () => { }
    },
    {
      name: '返回',
      type: 'button',
      style: 'default',
      callback: () => {
        this.go(market);
      }
    }
  ];
  public list: any;

  public fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];

  public itemAddForm = this.fb.group(
    {
      goodsId: [null, Validators.required],
      name: [null, Validators.required],
      bigPicture: ['sss', Validators.required],
      smallPicture: ['sss', Validators.required],
      price: [null, Validators.required],
      describe: [null, Validators.required],
      inventory: [null, Validators.required],
      reward: [null, Validators.required],
      type: [null, Validators.required]
    });

  constructor(private router: Router, private fb: FormBuilder, private message: NzMessageService, private ms: MarketService) {
    this.uploadProps = {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      callback: this.setImagePath
    };

    this.list = FormItem;
  }

  go = (url: string) => {
    this.router.navigate([url]);
  }

  submit(): void {
    this.addItem();
  }

  back(): void { }

  async addItem(): Promise<boolean> {
    const { itemAddForm } = this;
    if (!checkForm(itemAddForm)) {

      // 如果表单没有操作过，让其变为已操作dirty
      checkUndirtyForm(itemAddForm);
      this.message.error('表单不能有空数据');
      return false;
    }

    const { value } = this.itemAddForm;
    // value.goodsStock = parseInt(value.goodsStock, 10);
    const data = { ...value };
    const res = await this.ms.addItem(data);
    if (checkReq(res)) {
      this.message.success('添加商品成功');
      this.router.navigate([market]);
      return true;
    }

    return false;
  }

  setImagePath = ({ data }, { name }) => {
    if (data) {
      const patchValue = {};
      patchValue[name] = data;
      this.itemAddForm.patchValue({ ...patchValue });
    }
  }
}
