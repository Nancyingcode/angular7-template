import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import { AccountService } from 'src/app/service/account.service';
import { Config } from '../../../../../../../config/config';

const {
  accountI,
  accountInviters,
  accountOrderList
} = Config.userMana;

@Component({
  selector: 'app-order-detail',
  templateUrl: './order.detail.html',
  styleUrls: ['./order.detail.less']
})

export class AccountOrderDetailComponent {
  // public data: any = undefined;
  // public props = {
  //   alert: ['用户管理', '用户详情', '认购记录列表', '认购详情'],
  //   callback: () => {
  //     this.go(accountI, { account: this.getAccount() });
  //   }
  // };

  // public buttons = [
  //   {
  //     title: '推荐人列表',
  //     name: '查看详情',
  //     callback: () => {
  //       this.go(accountInviters, { account: this.getAccount() });
  //     }
  //   },
  //   {
  //     title: '认购记录',
  //     name: '查看详情',
  //     callback: () => {
  //       this.go(accountOrderList, { account: this.getAccount() });
  //     }
  //   }
  // ];

  // public inviterStr: string; // 邀请人
  // public orderListStr: string; // 认购记录

  // public state = {};

  // constructor(
  //   private router: Router,
  //   private as: AccountService,
  //   private route: ActivatedRoute) {
  //     this.inviterStr = `<app-small-button (click)="go('/')">邀请人</app-small-button>`;
  //     this.orderListStr = `<button>认购记录</button>`;
  //   }

  // async ngOnInit() {
  //   const data = await this.getData({ account: this.getAccount() });
  //   await this.setData(data);
  // }

  // async getData(data: any) {
  //   return await this.as.getInfoDetail(data, {});
  // }

  // async setData(data: any) {
  //   data.inviter = this.inviterStr;
  //   data.orderList = this.orderListStr;
  //   this.data = {
  //     title: [
  //       '手机号',
  //       '真实姓名',
  //       '身份证号码',
  //       'LPCC数量',
  //       'ETH数量',
  //       '活动资产LPCC',
  //       '锁仓资产LPCC',
  //       '每日加速收益',
  //       '每日固定收益',
  //       '每日邀请注册收益',
  //       '每日直推收益',
  //       '每日间接收益',
  //       '每日奖池收益',
  //       '我的推荐人',
  //       '业务码',
  //       '钱包地址',
  //       '认购记录'
  //     ],
  //     prop: [
  //       'account',
  //       'name',
  //       'card',
  //       'LPCCnumber',
  //       'ETHnumber',
  //       'availableAmount',
  //       'lockAmount',
  //       'accelerateRelease',
  //       'releaseProfit',
  //       'invitationProfit',
  //       'pushProfit',
  //       'indirectProfit',
  //       'bonusProfit',
  //       'invitationCode',
  //       'purseAddress',
  //     ],
  //     data: data,
  //   };
  // }

  // getAccount() {
  //   return this.route.snapshot.paramMap.get('account');
  // }

  // // go = (url: string) => {
  // //   this.router.navigate([url]);
  // // }

  // go = (router, { account }) => {
  //   this.router.navigate([router, { account }]);
  // }

}
