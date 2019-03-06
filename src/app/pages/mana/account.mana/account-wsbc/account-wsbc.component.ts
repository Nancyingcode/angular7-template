import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { NormalButton } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import {
  AccountIncomeDateFormate,
  Config,
  Log,
  TableProps
} from '../index';

const { page, defaultIncomeData } = Config;

@Component({
  selector: 'app-account-wsbc',
  templateUrl: './account-wsbc.component.html',
  styleUrls: ['./account-wsbc.component.less']
})

export class AccountWsbcComponent implements OnInit {
  @Input() account: string;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public data: TableProps;
  public buttonAdd: NormalButton;
  public buttonProps: NormalButton[];
  public isLoading: boolean;
  public today: string;
  public total: string;

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
    private drawerService: NzDrawerService,
    private message: NzMessageService) {
    this.today = '';
    this.total = '';
    this.account = '';
    this.searchText = '';
    this.isPagination = true;
    this.isLoading = false;
    this.condition = defaultIncomeData;
    this.data = {
      title: [],
      column: [],
      list: [],
      count: 0
    };

    this.buttonAdd = {
      name: '创建帐号',
      type: 'button',
      callback: () => {

      }
    };
  }

  ngOnInit(): void {
    try {
      this.condition = { ...this.condition, account: this.account };
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getWsbcIncomeList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count, today, total }: AccountIncomeDateFormate): void {
    this.data = {
      title: ['WSBC收益数量', '收益时间'],
      column: ['amount', 'createTime'],
      list,
      count
    };

    this.today = today;
    this.total = total;
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager: any): void => {
    const condition = { ...pager, account: text };
    this.setData(condition);
    this.setSearchText(text);
    return;
  }

  totalStr(): string {
    return `总收益${this.total}`;
  }

  todayStr(): string {
    return `今日收益${this.today}`;
  }
}
