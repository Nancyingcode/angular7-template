import { Component, Injectable, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import { CurrencyService } from 'src/app/service/currency.service';
import { NodeService } from 'src/app/service/node.service';
import {
  Config,
  ETH,
  Log,
  NormalButton,
  NotNamedButton
} from './index';

const { currencySellingEthDetail } = Config.userMana;
const console = new Log('CurrencySellingEthComponent');
const {
  page,
  pageSize,
  downloadUrl,
  defaultCurrencyData
} = Config;

@Component({
  selector: 'app-currency-selling-eth',
  templateUrl: './currency.selling.eth.html',
  styleUrls: ['./currency.selling.eth.less']
})

export class CurrencySellingEthComponent implements OnInit {
  private searchText: string;
  public isPagination: boolean;
  public data: any[];
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private cs: CurrencyService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;

    this.buttonProps = [
      {
        name: '详情',
        type: 'button',
        style: 'info',
        callback: (item: any) => {
          this.detail(item);
        }
      },
      {
        name: '取消',
        type: 'button',
        style: 'delete',
        callback: (item: any) => {
          // this.update(item);
        }
      }
    ];

    this.searchButton = {
      placeholder: '请输入手机号',
      callback: (text: string) => {
        this.search(text, page);
      }
    };

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { page: index - 1, pageSize });
      }
    };
  }

  async ngOnInit(): Promise<void> {
    const data = await this.getData({ ...defaultCurrencyData, type: ETH });
    await this.setData(data);
  }

  async getData(data: any): Promise<any> {
    const res = await this.cs.getSellingList(data);
    return res;
  }

  async setData({ content, totalElements }: any): Promise<void> {
    this.data = [
      ['单号', '寄售人帐号', '寄售时间'],
      ['orderId', 'userId', 'createTime'],
      content,
      totalElements
    ];
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  /***
   * 这里需要使用箭头函数来获取全局data
   * 否则就为 buttonProps.data 为undefined
   */
  search = async (text: string, pager: any) => {
    const condition = { userId: text, type: ETH, ...pager };
    const data = await this.getData(condition);
    await this.setData(data);
    this.setSearchText(text);
    return;
  }

  go = (url: string) => {
    this.router.navigate([url]);
  }

  detail = ({ orderId }) => {
    this.router.navigate([currencySellingEthDetail, { orderId }]);
  }
}
