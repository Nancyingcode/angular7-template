import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import {
  formDate,
  levelList,
  AccountService,
  Config,
  Log,
  PointerButton
} from '../index';
import { MarketService } from '../item.add';
const console = new Log('AccountDetailComponent');
const { accountI } = Config.userMana;

@Component({
  selector: 'app-market-orderundeliver-detail',
  templateUrl: './order.undeliver.detail.html',
  styleUrls: ['./order.undeliver.detail.less']
})

export class MarketOrderUndeliverDetailComponent implements OnInit {
  public data: any;
  public props: PointerButton;

  constructor(
    private router: Router,
    private ms: MarketService,
    private route: ActivatedRoute) {
    this.data = undefined;
    this.props = {
      alert: ['用户订单', '未发货订单', '订单详情'],
      callback: () => {
        this.goBack();
      }
    };
  }

  async ngOnInit(): Promise<void> {
    const data = await this.getData({ userId: this.getParams() });
    await this.setData(data);
  }

  async getData(data: any): Promise<any> {
    return await this.ms.getUndeliverDetail(data);
  }

  async setData(data: any): Promise<void > {

    this.data = {
      title: [
        '用户ID',
        '收获地址',
        '单号',
        '姓名',
        '电话号码',
        '购买时间',
        '购买产品'
      ],
      prop: [
        'account',
        'pruseAddress',
        'loginPwd',
        'payPwd',
        'name',
        'card',
        'isReal',
        'nickName',
        'phone',
        'inviteCode'
      ],
      data
    };
  }

  getParams(): any {
    return this.route.snapshot.paramMap.get('userId');
  }

  // go = (url: string) => {
  //   this.router.navigate([url]);
  // }

  goBack = () => {
    this.router.navigate([accountI]);
  }

  go = (router: string, { account }: any) => {
    this.router.navigate([router, { account }]);
  }

}
