import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import {
  formDate,
  levelList,
  Config,
  CurrencyService,
  Log,
  PointerButton
} from '../index';
const console = new Log('AccountDetailComponent');
const { accountI } = Config.userMana;

@Component({
  selector: 'app-currency-checketh-detail',
  templateUrl: './check.eth.detail.html',
  styleUrls: ['./check.eth.detail.less']
})

export class CurrencyCheckEthDetailComponent {
  // public data: any;
  // public props: PointerButton;

  // constructor(
  //   private router: Router,
  //   private cs: CurrencyService,
  //   private route: ActivatedRoute) {
  //   this.data = undefined;
  //   this.props = {
  //     alert: ['法币交易管理', '审核ETH订单', '订单详情'],
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
  //     titleOne: [
  //       '寄售人ID',
  //       '单号',
  //       '寄售人姓名',
  //       '联系电话',
  //       '开户银行',
  //       '收款银行卡',
  //       '收款支付宝',
  //       '寄售币种',
  //       '寄售所需RMB'
  //     ],
  //     titleTwo: [
  //       '购买人ID',
  //       '单号',
  //       '购买人姓名',
  //       '联系电话',
  //       '开户银行',
  //       '付款银行卡',
  //       '付款支付宝',
  //       '购买币种',
  //       '购买所需RMB'
  //     ],
  //     prop: [
  //       'userId',
  //       'orderId',
  //       'name',
  //       'phone',
  //       'openBank',
  //       'bankAccount',
  //       'alipay',
  //       'type',
  //       'totalRmb'
  //     ],
  //     fir: data.out,
  //     sec: data.in
  //   };
  // }

  // getParams() {
  //   return this.route.snapshot.paramMap.get('orderId');
  // }

  // // go = (url: string) => {
  // //   this.router.navigate([url]);
  // // }

  // goBack = () => {
  //   this.router.navigate([accountI]);
  // }

  // go = (router, { account }) => {
  //   this.router.navigate([router, { account }]);
  // }

}
