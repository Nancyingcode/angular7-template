import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import {
  formDate,
  levelList,
  AccountService,
  Config,
  CurrencyService,
  Log,
  PointerButton
} from '../index';
const console = new Log('AccountDetailComponent');
const { currencyCheckImacc } = Config.userMana;

@Component({
  selector: 'app-currency-lockimacc-detail',
  templateUrl: './lock.imacc.detail.html',
  styleUrls: ['./lock.imacc.detail.less']
})

export class CurrencyLockImaccDetailComponent {
  // public data: any;
  // public props: PointerButton;

  // constructor(
  //   private router: Router,
  //   private cs: CurrencyService,
  //   private route: ActivatedRoute) {
  //   this.data = undefined;
  //   this.props = {
  //     alert: ['法币交易管理', '锁定IMACC订单', '订单详情'],
  //     callback: () => {
  //       this.goBack();
  //     }
  //   };
  // }

  // async ngOnInit() {
  //   const data = await this.getData({ orderId: this.getParams() });
  //   await this.setData(data);
  // }

  // async getData(data: any) {
  //   return await this.cs.getCheckDetail(data);
  // }

  // async setData(data: any) {

  //   this.data = {
  //     title: [
  //       '寄售人订单',
  //       '单号',
  //       '寄售人姓名',
  //       '联系电话',
  //       '开户银行',
  //       '收款银行卡',
  //       '收款支付宝',
  //       '寄售币种',
  //       '购买所需RMB',
  //       '锁定时间',
  //       '审核时间'
  //     ],
  //     prop: [
  //       'account',
  //       'pruseAddress',
  //       'loginPwd',
  //       'payPwd',
  //       'name',
  //       'card',
  //       'isReal',
  //       'nickName',
  //       'phone',
  //       'inviteCode'
  //     ],
  //     data
  //   };
  // }

  // getParams() {
  //   return this.route.snapshot.paramMap.get('orderId');
  // }

  // // go = (url: string) => {
  // //   this.router.navigate([url]);
  // // }

  // goBack = () => {
  //   this.router.navigate([currencyCheckImacc]);
  // }

  // go = (router, { account }) => {
  //   this.router.navigate([router, { account }]);
  // }

}
