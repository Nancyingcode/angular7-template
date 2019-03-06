import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';
import {
  checkForm, checkReq, checkUndirtyForm, Config,
  DefaultDetailDataFormate, Log, NormalButton
} from '../index';

import { AdminService, FormGroupService, HomeService, LoginService } from '../service';
import { listOne, listThree, listTwo } from './store';

const { adminI } = Config.userMana;
const console = new Log('RuleModifyComponent');

@Component({
  selector: 'app-rule-modify',
  templateUrl: './rule.modify.html',
  styleUrls: ['./rule.modify.less']
})

export class RuleModifyComponent implements OnInit {
  public blurItem: any;
  public list: any[];
  public listOne: any[];
  public listTwo: any[];
  public listThree: any[];
  public titleList: string[];
  public forms: FormGroup[];
  public isLoadingOne: boolean;
  public isLoadingTwo: boolean;
  public isLoadingThree: boolean;
  public button: NormalButton;
  public formOne: FormGroup;
  public formTwo: FormGroup;
  public formThree: FormGroup;
  public form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private as: AdminService,
    private hs: HomeService,
    private ls: LoginService,
    private fgs: FormGroupService,
    private message: NzMessageService) {
    this.isLoadingOne = false;
    this.isLoadingTwo = false;
    this.isLoadingThree = true;
    this.listOne = listOne;
    this.listTwo = listTwo;
    this.listThree = listThree;

    this.button = {
      name: '确认',
      type: 'submit',
      choose: 'loading',
      callback: (item: any) => { }
    };

    this.formOne = this.fgs.toFormGroup(listOne);
    this.formTwo = this.fgs.toFormGroup(listTwo);
    this.list = [listOne, listTwo, listThree];
    this.forms = [this.formOne, this.formTwo, this.formThree];
    this.titleList = ['参与时间设置', '收获时间设置'];
  }

  ngOnInit(): void {
    try {
      this.setData();
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(): void {
    this.hs.getPriceList().subscribe(res => this.patchValue(res));
  }

  patchValue({ data }: DefaultDetailDataFormate): void {
    const { lineUpTime, harvestTime } = data;
    this.formOne.patchValue({ lineUpTime });
    this.formTwo.patchValue({ rewardTime: harvestTime });
  }

  submit(index: number): void {
    const adminPhone = this.ls.getAdminPhone();
    switch (index) {
      case 0: {
        if (!checkForm(this.formOne)) {
          this.message.create('error', `请填写信息完全`);
          checkUndirtyForm(this.formOne);
          return;
        }

        const { value } = this.formOne;
        this.isLoadingOne = true;
        this.hs.updateLineUp({ ...value, adminPhone })
          .subscribe(res => {
            this.isLoadingOne = false;
            if (res) {
              this.message.success('修改参与时间成功');
            }
          });

        break;
      }

      case 1: {
        if (!checkForm(this.formTwo)) {
          this.message.create('error', `请填写信息完全`);
          checkUndirtyForm(this.formTwo);
          return;
        }

        const { value } = this.formTwo;
        this.isLoadingTwo = true;
        this.hs.updateRewardTime({ ...value, adminPhone, phone: value.phone })
          .subscribe(res => {
            this.isLoadingTwo = false;
            if (res) {
              this.message.success('修改收获时间成功');
            }
          });

        break;
      }
    }
  }
}
