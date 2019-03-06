import { Component, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import md5 from 'js-md5';
import { NzDrawerRef, NzMessageService } from 'ng-zorro-antd';

import { FormItem } from 'src/app/http';
import { AdminService } from 'src/app/service/admin.service';
import {
  admins,
  checkForm,
  checkUndirtyForm,
  AdminUpdateData, Config,
  FormGroupService, Log,
  LoginService,
  NormalButton,
  PointerButton
} from './index';

const console = new Log('AdminUpdataComponent');

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin.update.html',
  styleUrls: ['./admin.update.less']
})

export class AdminUpdataComponent implements OnInit {
  @Input() item: any;
  private userId: number;
  public isLoading: boolean;
  public props: PointerButton;
  public buttons: NormalButton[];
  public form: FormGroup;
  public list: FormItem[];

  constructor(
    private fgs: FormGroupService,
    private as: AdminService,
    private drawerRef: NzDrawerRef<boolean>,
    private message: NzMessageService) {
    this.isLoading = false;
    this.userId = 0;
    this.list = admins;
    this.form = this.fgs.toPasswordFormGroup(admins, 'newPassword', 'confirmPassword');

    this.buttons = [
      {
        name: '提交',
        type: 'submit',
        choose: 'loading',
        callback: () => { }
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

  ngOnInit(): void {
    this.getParams();
  }

  /**
   * 获取页面传参
   */
  getParams(): void {
    const patchValue = {
      ...this.item,
      username: this.item.realname
    };

    this.userId = this.item.id;
    this.form.patchValue({ ...patchValue });
  }

  getUpdateData(): AdminUpdateData {
    return {
      id: this.userId,
      ...this.form.value
    };
  }

  submit(): boolean {
    if (!checkForm(this.form)) {
      this.message.create('error', `请填写信息完全`);
      checkUndirtyForm(this.form);
      return false;
    }

    this.isLoading = true;
    const updateData = this.getUpdateData();
    this.as.updateManager(updateData)
      .subscribe(isUpdate => {
        if (isUpdate) {
          this.close(true);
          this.message.success('修改员工成功');
        }
      });

    return true;
  }

  close = (result?: boolean): void => {
    this.drawerRef.close(result);
  }
}
