import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import md5 from 'js-md5';
import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';
import { AccountService } from 'src/app/service/account.service';
import { FormGroupService } from '../service';
import {
  accountAddFormItems,
  checkForm, checkPasswordFormate,
  checkReq,
  checkUndirtyForm,
  hasOwnProperty, Config, Log
} from './index';

const console = new Log('AdminAddComponent');
const { USER_INFO } = Config;
const { adminI, accountI } = Config.userMana;

@Component({
  selector: 'app-account-add',
  templateUrl: './account.add.html',
  styleUrls: ['./account.add.less']
})

export class AccountAddComponent implements OnInit {
  private isClick: boolean;
  public blurItem;
  public isLoading = false;
  public props = {
    alert: ['帐号管理', '添加帐号'],
    callback: () => {
      this.goBack();
    }
  };

  public buttons = [
    {
      name: '提交',
      type: 'submit',
      choose: 'loading',
      callback: () => {
        console.logger('submit add');
      }
    }
  ];

  public backBtn = {
    name: '返回',
    type: 'button',
    color: 'default',
    callback: () => {
      this.goBack();
    }
  };

  public list: any;
  public accountAddForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private as: AccountService,
    private fgs: FormGroupService,
    private message: NzMessageService) {
    this.isClick = false;
    this.list = accountAddFormItems;
    this.accountAddForm = this.fgs.toRuleFormGroup(accountAddFormItems);
  }

  ngOnInit(): void {
    // this.getParams();
    // this.setValidate();
  }

  getParams = () => {
    this.route.params.subscribe(item => this.accountAddForm.patchValue({ ...item }));
  }

  goBack = (): void => {
    this.router.navigate([accountI]);
  }

  submit(): void {
    if (!checkForm(this.accountAddForm)) {
      checkUndirtyForm(this.accountAddForm);
      this.message.error(`请填写信息完整`);
      return;
    }

    this.isLoading = true;
    this.as.addAccount(this.accountAddForm.value).subscribe(res => {
      this.isLoading = false;
      if (res) {
        this.goBack();
        return;
      }
    });
  }
}
