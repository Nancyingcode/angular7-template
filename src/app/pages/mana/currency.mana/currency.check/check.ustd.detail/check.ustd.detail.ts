import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';
import { CurrencyService } from '../service';
import {
  Config,
  CurrecyDetailProps, DefaultDetailDataFormate ,
  Log,
  NormalButton,
  PointerButton,
  TableDetailProps
} from './index';

const console = new Log('CurrencyCheckUstdDetailComponent');
const { currencyCheckUsdt } = Config.userMana;

@Component({
  selector: 'app-currency-checkusdt-detail',
  templateUrl: './check.ustd.detail.html',
  styleUrls: ['./check.ustd.detail.less']
})

export class CurrencyCheckUstdDetailComponent implements OnInit {
  @Input() orderId: number;
  public data: CurrecyDetailProps ;

  constructor(
    private router: Router,
    private cs: CurrencyService,
    private message: NzMessageService,
    private route: ActivatedRoute) {
    this.data = {
      rows: [
        {
          firstName: '',
          firstValue: '',
          secondName: '',
          secondValue: ''
        }
      ],

      images: []
    };

  }

  ngOnInit(): void {
    try {
      this.setData({ orderId: this.orderId });
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.cs.getOrderDetail(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { data }: DefaultDetailDataFormate ): void {
    this.data = {
      rows: [
        {
          firstName: '订单号',
          firstValue: data.order.orderId,
          secondName: '交易数量',
          secondValue: data.order.count
        },
        {
          firstName: '买家手机号',
          firstValue: data.order.buyerPhone,
          secondName: 'CNY单价',
          secondValue: data.order.cnyPrice
        },
        {
          firstName: '卖家手机号',
          firstValue: data.order.sellerPhone,
          secondName: 'CNY总价',
          secondValue: data.order.totalAmount
        }
      ],

      images: [
        {
          title: '卖家收款二维码',
          url: data.order.voucherImg
        },
        {
          title: '买家支付凭证',
          url: data.payUrl
        }
      ]
    };
  }

}
