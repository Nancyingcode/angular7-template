import { Component, Injectable, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import { NormalButton } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import { accountStatus } from '../..';
import {
  userLevels, Config,
  DefaultDataFormate,
  FORMATE, Log,
  RANDOM,
  STATIC, TableProps
} from '../index';
const { defaultData, defaultAccountData, page, pageSize } = Config;
const console = new Log('AccountPaymentInfoComponent');

@Component({
  selector: 'app-account-payment-info',
  templateUrl: './account.payment.info.html',
  styleUrls: ['./account.payment.info.less']
})

export class AccountPaymentInfoComponent implements OnInit {
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public data: TableProps;
  public buttonAdd: NormalButton;
  public buttonProps: NormalButton[];
  public isLoading: boolean;

  public searchButton = {
    placeholder: '请输入手机号',
    callback: (text: string) => {
      this.search(text, page);
    }
  };

  public paginationButton = {
    callback: (index: number) => {
      this.search(this.searchText, { ...this.condition, page: index });
    }
  };

  constructor(
    private router: Router,
    private as: AccountService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = true;
    this.isLoading = false;
    this.condition = defaultAccountData;
    this.data = {
      title: [],
      column: [],
      list: [],
      count: 0
    };

    this.buttonProps = [
      // {
      //   name: '详情',
      //   type: 'button',
      //   style: 'info',
      //   callback: (item) => {
      //   }
      // }
      // {
      //   name: '推荐人',
      //   type: 'button',
      //   style: 'info',
      //   callback: (item) => {
      //     this.invite(item);
      //   },
      // }
    ];
  }

  ngOnInit(): void {
    try {
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getPaymentList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    this.data = {
      title: ['手机号', '姓名', '开户行', '开户支行', '银行卡号'],
      column: ['phone', 'name', 'bank', 'openBank', 'bankCard'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager: any): void => {
    const condition = { ...pager, phone: text };
    this.setData(condition);
    this.setSearchText(text);
    return;
  }
}
