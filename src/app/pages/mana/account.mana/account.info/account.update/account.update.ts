import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import md5 from 'js-md5';
import * as _ from 'lodash';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { LoginService } from '../../account.add';
import {
  checkForm,
  checkReq,
  checkUndirtyForm,
  teamLevelsDropDown,
  AccountService, Config,
  Log, NormalButton,
  PointerButton
} from './index';
const console = new Log('ItemUpdateComponent');
const { accountW, accountI } = Config.userMana;
const { defaultData } = Config;

@Component({
  selector: 'app-account-update',
  templateUrl: './account.update.html',
  styleUrls: ['./account.update.less']
})

export class AccountUpdateComponent implements OnInit {
  private userId: number;
  public props: PointerButton;
  public buttons: NormalButton[];
  public list: any[];
  public isLoading: boolean;
  public itemUpdateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private ls: LoginService,
    private message: NzMessageService,
    private as: AccountService) {
    this.userId = 0;
    this.isLoading = false;
    this.props = {
      alert: ['用户信息管理', '用户等级管理'],
      callback: () => {
        this.back();
      }
    };

    this.buttons = [
      {
        name: '确定',
        type: 'submit',
        choose: 'loading',
        callback: () => { }
      },
      {
        name: '返回',
        type: 'button',
        style: 'default',
        callback: () => {
          this.back();
        }
      }
    ];

    this.itemUpdateForm = this.fb.group({
      phone: ['', Validators.required],
      operatorLevel: ['0', Validators.required]
    });

    this.list = [
      {
        title: '手机号',
        type: 'text',
        placeholder: '帐号',
        clz: 'form-control-plaintext ',
        readonly: true,
        name: 'phone',
        rt: '',
        wt: '手机号不为空',
        callback: () => { }
      },
      {
        title: '团队等级',
        type: 'select',
        placeholder: '团队等级',
        clz: 'form-control',
        readonly: false,
        name: 'operatorLevel',
        rt: '',
        wt: '团队等级不能为空',
        content: teamLevelsDropDown,
        callback: (item) => { }
      }
    ];
  }

  go(router: Router, url: string): void {
    router.navigate([url]);
  }

  async ngOnInit(): Promise<void> {
    await this.getParams();
  }

  async setForm(item: any): Promise<void> {
    try {
      this.itemUpdateForm.patchValue({ ...item });
      this.userId = parseInt(item.id, 10);
    } catch (e) {
      this.message.error('服务器异常，请重试，如屡试无法操作,请联系开发者');
      this.back();
    }
  }

  getParams(): void {
    this.route.params.subscribe(item => {
      this.setForm(item);
    });
  }

  async submit(): Promise<any> {
    const { itemUpdateForm } = this;
    if (!checkForm(itemUpdateForm)) {
      checkUndirtyForm(itemUpdateForm);
      this.message.error('请填写信息完全');
      return;
    }

    this.isLoading = true;
    const res = await this.updateItem();
    this.isLoading = false;
    if (checkReq(res)) {
      this.message.success('更新用户等级成功');
      this.router.navigate([accountI]);
      return true;
    }

    return;
  }

  async updateItem(): Promise<any> {
    const updateData = this.getUpdateData();
    return await this.as.updateAccount(updateData);
  }

  getUpdateData(): void {
    const { value } = this.itemUpdateForm;
    const { operatorLevel } = value;
    return { ...value, operatorLevel: parseInt(operatorLevel, 10), userId: this.userId, adminId: this.ls.getAdminId() };
  }

  async getDetail(): Promise<any> {
    return await this.as.getUpdateInfo({ id: this.getId() });
  }

  back = () => {
    this.router.navigate([accountI]);
  }

  getId(): number | string {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userId = parseInt(userId, 10);
    return userId;
  }
}
