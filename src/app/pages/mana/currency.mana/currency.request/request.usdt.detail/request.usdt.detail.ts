import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzDrawerRef, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { CurrencyService, LoginService } from '../service';
import {
  showConfirm, Config,
  CurrecyDetailProps, DefaultDetailDataFormate ,
  Log, NormalButton
} from './index';

const console = new Log('CurrencyRequestUstdDetailComponent');
const { currencyCheckUsdt } = Config.userMana;

@Component({
  selector: 'app-market-requestusdt-detail',
  templateUrl: './request.usdt.detail.html',
  styleUrls: ['./request.usdt.detail.less']
})

export class CurrencyRequestUstdDetailComponent implements OnInit {
  @Input() orderId: number;
  private condition: any;
  public data: CurrecyDetailProps;
  public buttons: NormalButton[];

  constructor(
    private cs: CurrencyService,
    private ls: LoginService,
    private drawerRef: NzDrawerRef<boolean>,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.condition = { orderId: this.orderId };
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

    this.buttons = [
      {
        name: '申述通过',
        type: 'button',
        style: 'success',
        callback: this.confirm
      },
      {
        name: '申述拒绝',
        type: 'button',
        style: 'delete',
        callback: this.refuse
      }
    ];

  }

  ngOnInit(): void {
    try {
      this.condition.orderId = this.orderId;
      this.setData(this.condition);
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

  close = (result?: boolean): void => {
    this.drawerRef.close(result);
  }

  confirm = () => {
    const adminId = this.ls.getAdminId();
    showConfirm(`通过`, `是否要通过订单${this.orderId}`, this.modalService, async () => {
      const confirmData = { orderId: this.orderId, adminId , result: 1 };
      this.cs.confirm(confirmData).subscribe(res => {
        if (res) {
          this.setData(this.condition);
          this.message.success(`通过订单${this.orderId}成功`);
          this.close(true);
        }

        return false;
      });

      this.setData(this.condition);
      return false;
    });
  }

  refuse = ({ orderId }) => {
    const adminId = this.ls.getAdminId();
    showConfirm(`拒绝`, `是否要拒绝订单${orderId}`, this.modalService, async () => {
      const refuseData = { orderId , adminId , result: 0 };
      this.cs.cancel(refuseData).subscribe(res => {
        if (res) {
          this.setData(this.condition);
          this.message.success(`拒绝订单${this.orderId}成功`);
          this.close(true);
        }

        return false;
      });

      return false;
    });
  }

}
