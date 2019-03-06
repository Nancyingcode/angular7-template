import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';
import { AccountDetailData, DefaultDetailDataFormate } from '../tab';
import {
  formDate,
  levelList,
  AccountService,
  Config,
  DefaultDataFormate,
  Log, NormalButton,
  PointerButton,
  TableDetailProps
} from './index';

const { defaultData } = Config;
const console = new Log('AccountDetailComponent');
const { accountI, accountWU } = Config.userMana;

@Component({
  selector: 'app-account-single-detail',
  templateUrl: './account.single.detail.html',
  styleUrls: ['./account.single.detail.less']
})

export class AccountSingleDetailComponent implements OnInit {
  @Input() id: any;
  public data: TableDetailProps;
  public infoList: any;
  public wealList: any;
  public titles: string[];
  public wealTitle: string;
  public infoTitle: string;
  public props: PointerButton;
  public modifyButton: NormalButton;

  constructor(
    private router: Router,
    private as: AccountService,
    private message: NzMessageService,
    private route: ActivatedRoute) {
    this.data = {
      title : [],
      column: [],
      data : {}
    };

    this.infoList = undefined;
    this.wealList = undefined;
    this.wealTitle = '用户资产';
    this.infoTitle = '用户信息';
    this.props = {
      alert: ['用户信息管理', '用户详情'],
      callback: () => {
        this.goBack();
      }
    };

    this.titles = [
      '个人详情',
      '个人收益',
      '矿机列表',
      '邀请人'
    ];

    this.modifyButton = {
      name: '修改资产',
      type: 'button',
      callback: () => {
        this.update();
      }
    };

  }

  ngOnInit(): void {
    try {
      this.setData({ id: this.id });
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: AccountDetailData): void {
    this.as.getAccountDetail(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { data }: DefaultDetailDataFormate ): void {
    this.data = {
      title : ['手机号', '上级账号', '业务码', '钱包地址', 'ETH余额', 'ETC余额', 'PHONE余额'],
      column: ['phone', 'supper', 'invitationCode', 'receiveAddress', 'ethNum' , 'etcNum', 'pmdNum'],
      data
    };
  }

  getUserId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  goBack = (): void => {
    this.router.navigate([accountI]);
  }

  update = (): void => {
    this.router.navigate([accountWU, { id: this.id, ...this.wealList.data }]);
  }

  go = (router, { account }: any): void => {
    this.router.navigate([router, { account }]);
  }

}
