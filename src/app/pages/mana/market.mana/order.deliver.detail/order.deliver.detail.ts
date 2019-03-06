import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import {
  formDate,
  levelList,
  Config,
  Log,
  MarketService,
  PointerButton
} from '../index';
const console = new Log('MarketOrderDeliverDetailComponent');
const { accountI } = Config.userMana;

@Component({
  selector: 'app-market-orderdeliver-detail',
  templateUrl: './order.deliver.detail.html',
  styleUrls: ['./order.deliver.detail.less']
})

export class MarketOrderDeliverDetailComponent implements OnInit {
  public data: any;
  public props: PointerButton;
  public image!: string;

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

    console.log('check here');
  }

  async ngOnInit(): Promise<void> {
    // console.log('check here');
    const data = await this.getData({ userId: this.getParams() });
    await this.setData(data);
  }

  async getData(data: any): Promise<any> {
    return await this.ms.getDeliverDetail(data);
  }

  async setData(data: any): Promise<void> {

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
        'userId',
        'shippingAddress',
        'orderId',
        'name',
        'phone',
        'createTime',
        'goodsName'
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
