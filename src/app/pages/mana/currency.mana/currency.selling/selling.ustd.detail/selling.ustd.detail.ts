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

const console = new Log('CurrencySellingUstdDetailComponent');
const { currencyCheckUsdt } = Config.userMana;

@Component({
  selector: 'app-market-sellingusdt-detail',
  templateUrl: './selling.ustd.detail.html',
  styleUrls: ['./selling.ustd.detail.less']
})

export class CurrencySellingUstdDetailComponent implements OnInit {
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
      this.setData({ });
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.cs.getCheckListDetail(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { data }: DefaultDetailDataFormate ): void {
    this.data = {
      rows: [
        {
          firstName: '订单号',
          firstValue: data.tradeNo,
          secondName: '交易数量',
          secondValue: data.number
        },
        {
          firstName: '买家手机号',
          firstValue: data.buyerTel,
          secondName: 'CNY单价',
          secondValue: data.cnyUnitPrice
        },
        {
          firstName: '卖家手机号',
          firstValue: data.sellerTel,
          secondName: 'CNY总价',
          secondValue: data.cnyTotalPrice
        }
      ],

      images: [
        {
          title: '卖家收款二维码',
          url: data.sellerPaymentUrl
        },
        {
          title: '买家支付凭证',
          url: data.buyerCertificationUrl
        }
      ]
    };
  }

}
