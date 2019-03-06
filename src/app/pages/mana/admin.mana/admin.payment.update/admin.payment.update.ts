import { Component, Injectable, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import md5 from 'js-md5';
import { NzDrawerRef, NzMessageService } from 'ng-zorro-antd';
import { AdminPaymentUpdateData, FormItem } from 'src/app/http';
import { AdminService } from 'src/app/service/admin.service';
import {
  checkForm,
  checkUndirtyForm,
  payment,
  AdminUpdateData, Config,
  FormGroupService, Log,
  LoginService,
  NormalButton,
  PointerButton
} from './index';
const console = new Log('AdminUpdataComponent');
const { admin } = Config.userMana;

@Component({
  selector: 'app-admin-payment-update',
  templateUrl: './admin.payment.update.html',
  styleUrls: ['./admin.payment.update.less']
})

export class AdminPaymentUpdataComponent implements OnInit {
  @Input() data: any;
  private userId: number;
  public isLoading: boolean;
  public props: PointerButton;
  public buttons: NormalButton[];
  public form: FormGroup;
  public list: FormItem[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fgs: FormGroupService,
    private as: AdminService,
    private ls: LoginService,
    private drawerRef: NzDrawerRef<boolean>,
    private route: ActivatedRoute,
    private message: NzMessageService) {
    this.isLoading = false;
    this.userId = 0;
    this.list = payment;
    this.form = this.fgs.toRuleFormGroup(payment);

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
          this.close();
        }
      }
    ];
  }

  ngOnInit(): void {
    this.setParams();
  }

  /**
   * 获取页面传参
   */
  setParams(): void {
      const { name }  = this.data;
      this.form.patchValue({ ...this.data });
  }

  getUpdateData(): AdminPaymentUpdateData {
    const adminId = this.ls.getAdminId();
    return {
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
    this.as.updatePayment(updateData)
      .subscribe(isUpdate => {
        if (isUpdate) {
          this.close(true);
        }
      });

    return true;
  }

  close(result?: boolean): void {
    this.drawerRef.close(result);
  }
}
