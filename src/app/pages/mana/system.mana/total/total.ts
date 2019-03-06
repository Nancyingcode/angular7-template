import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';

import { HomeService } from 'src/app/service/home.service';
import { Config, DefaultDetailDataFormate, Log } from '../index';

const console = new Log('TotalComponent');

@Component({
  selector: 'app-total',
  templateUrl: './total.html',
  styleUrls: ['./total.less']
})

export class TotalComponent implements OnInit {
  public data: any = undefined;
  public props = {
    alert: ['平台管理', '平台统计'],
    callback: () => { }
  };

  public inviterStr: string; // 邀请人
  public orderListStr: string; // 认购记录

  public state = {};

  constructor(
    private router: Router,
    private hs: HomeService,
    private message: NzMessageService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    try {
      this.setData();
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(): void {
    this.hs.getTotalInfo().subscribe(res => this.patchValue(res));
  }

  patchValue( { data }: DefaultDetailDataFormate ): void {
    this.data = {
      title: [
        '资金池ETH数',
        '用户总数',
        '平台钱包地址',
        '平台私匙'
      ],
      column: [
        'ETCNum',
        'userCount',
        'rechargeAddress',
        'privateKey'
      ],
      data
    };
  }
}
