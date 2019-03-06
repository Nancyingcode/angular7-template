import { Component, Injectable, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import { AccountService } from 'src/app/service/account.service';
import {
  Config, DefaultDataFormate,
  Log,
  NormalButton,
  NotNamedButton,
  TableProps
} from './index';

const { accountWU, accountID, accountAdd } = Config.userMana;
const { defaultExchangeData, page, pageSize } = Config;
const console = new Log('AccountInfoComponent');

@Component({
  selector: 'app-account-exchange-info',
  templateUrl: './account.exchange.info.html',
  styleUrls: ['./account.exchange.info.less']
})

export class AccountExchangeInfoComponent implements OnInit {
  private searchText: string;
  public isPagination: boolean;
  public isLoading: boolean;
  public data: TableProps;
  public buttonAdd: NormalButton;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private as: AccountService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = true;
    this.isLoading = false;
    this.data = undefined;
    this.buttonAdd = {
      name: '创建帐号',
      type: 'button',
      callback: () => { }
    };

    this.buttonProps = [
      {
        name: '修改',
        type: 'button',
        style: 'default',
        callback: (item: any) => {
          this.update(item);
        }
      },
      {
        name: '详情',
        type: 'button',
        style: 'info',
        callback: (item: any) => {
          this.detail(item);
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
        this.search(this.searchText, { page: index, size: pageSize });
      }
    };
  }

  ngOnInit(): void {
    try {
      this.setData(defaultExchangeData);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getExchangeList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['账号', '消费类型', '币种', '数量', '时间'],
      column: ['account', 'type', 'coinName', 'number', 'createTime'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager: any): void => {
    const condition = { account: text, ...pager };
    this.setData(condition);
    this.setSearchText(text);
    return;
  }

  update = ({ id }) => {
    this.router.navigate([accountWU, { id }]);
  }

  detail = ({ account }) => {
    this.router.navigate([accountID, { account }]);
  }

  add = () => {
    this.router.navigate([accountAdd]);
  }

  go = (url: string) => {
    this.router.navigate([url]);
  }
}
