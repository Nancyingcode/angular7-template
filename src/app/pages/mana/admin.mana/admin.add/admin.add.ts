import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import md5 from 'js-md5';
import * as _ from 'lodash';
import { NzDrawerRef, NzMessageService } from 'ng-zorro-antd';

import { AdminService } from 'src/app/service/admin.service';
import { FormGroupService, LoginService } from '../admin.info';
import {
  adminAddItem,
  checkForm, checkReq,
  checkUndirtyForm,
  AdminAddData,
  Config,
  Log,
  NormalButton,
  PointerButton
} from './index';
const console = new Log('AdminAddComponent');

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin.add.html',
  styleUrls: ['./admin.add.less']
})

export class AdminAddComponent implements OnInit {
  public blurItem: any;
  public isLoading: boolean;
  public buttons: NormalButton[];
  public list: any;
  public adminAForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fgs: FormGroupService,
    private ls: LoginService,
    private as: AdminService,
    private drawerRef: NzDrawerRef<boolean>,
    private message: NzMessageService) {
    this.isLoading = true;
    this.list = adminAddItem;
    this.adminAForm = this.fgs.toPasswordFormGroup(adminAddItem, 'adminPassword', 'confirmPassword');

    this.buttons = [
      {
        name: '提交',
        type: 'submit',
        callback: () => {}
      },
      {
        name: '返回',
        type: 'button',
        style: 'default',
        callback: () => {
          this.close(true);
        }
      }
    ];
  }

  ngOnInit(): void {}

  getNewManager(): AdminAddData {
    const adminId = this.ls.getAdminId();
    return { ...this.adminAForm.value , adminId };
  }

  submit(): boolean {
    if (!checkForm(this.adminAForm)) {
      checkUndirtyForm(this.adminAForm);
      this.message.create('error', `请填写信息完整`);
      return false;
    }

    this.isLoading = true;
    const manager = this.getNewManager();
    this.as.addManager(manager)
    .subscribe(isAdd => {
      if (isAdd) {
        this.close(true);
        this.message.success('添加员工成功');
      }
    });

    return true;
  }

  close = (result?: boolean): void => {
    this.drawerRef.close(result);
  }
}
