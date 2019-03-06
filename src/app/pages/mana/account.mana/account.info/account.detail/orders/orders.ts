import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';
import { AccountService } from 'src/app/service/account.service';
import { formNum, getMonths, months, years, AccountOrderListData, Config, DefaultDataFormate, Log, NormalButton, NotNamedButton, TableProps } from './index';

const { page, pageSize, defaultOrderListData } = Config;
const console = new Log('AccountOrderListComponent');

@Component({
  selector: 'app-order-list',
  templateUrl: './orders.html',
  styleUrls: ['./orders.less']
})

export class AccountOrderListComponent implements OnInit {
  @Input() id: number;
  private condition: AccountOrderListData;
  private searchText: string;
  private year: number;
  private month: number;
  public data: TableProps;
  public isPagination: boolean;
  public dropDownMonth: any;
  public dropDownYear: any;
  public monthTotal: number;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private as: AccountService,
    private message: NzMessageService,
    private route: ActivatedRoute) {

    this.data = {
      title: [],
      column: [],
      list: [],
      count: 0
    };

    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.dropDownMonth = { ...months };
    this.dropDownYear = years;
    this.monthTotal = 0;
    this.condition = defaultOrderListData;
    this.isPagination = true;
    this.searchText = '';
    this.buttonProps = [
      // {
      //   name: '查看详情',
      //   type: 'button',
      //   callback: (item) => {
      //     this.go(accountInvitersD, item);
      //   },
      // }
    ];

    this.searchButton = {
      placeholder: '请输入手机号',
      callback: (text: string) => {
        this.search(text, this.condition);
      }
    };

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { ...this.condition, page: index });
      }
    };
  }

  ngOnInit(): void {
    try {
      this.condition = { ...this.condition, id: this.id };
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getOrderList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    this.data = {
      title: ['级别', '商务分红', '生态分红', '周期'],
      column: ['levelStr', 'businessReward', 'ecologicalReward', 'timeCount'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text?: string, pager?: any): boolean => {
    this.condition = { ...pager, phone: text };
    this.setData(this.condition);
    this.setSearchText(text);
    return true;
  }

  setMonthTotal(): void {

  }

  /**
   * 给月份选择重新赋值
   */
  setMonthDropDown(): void {
    switch (this.year === new Date().getFullYear()) {
      case true: {
        this.dropDownMonth.content = months.content;
        break;
      }

      case false: {
        this.dropDownMonth.content = getMonths();
        break;
      }
    }
  }

  getTimeByMonth(num: string): string {
    return `${this.year}-${formNum(num)}`;
  }

  selectMonth = (index: string): void => {
    try {
      this.month = parseInt(index, 10);
      this.as.getMonthTotal({ month: this.getTimeByMonth(index) }).subscribe(res => this.monthTotal = res.data);
      this.condition = { ...this.condition, month: this.getTimeByMonth(index) };
      this.setData(this.condition);
    } catch (error) {
      this.monthTotal = 0;
      this.message.error('暂无数据');
    }
  }

  getTimeByYear(num: string): string {
    return `${num}-${formNum(this.month.toString())}`;
  }

  selectYear = (index: string): void => {
    try {
      this.year = parseInt(index, 10);
      this.setMonthDropDown();
      this.as.getMonthTotal({ month: this.getTimeByYear(index) }).subscribe(res => this.monthTotal = res.data);
      this.condition = { ...this.condition, month: this.getTimeByYear(index) };
      this.setData(this.condition);
    } catch (error) {
      this.monthTotal = 0;
      this.message.error('暂无数据');
    }
  }

  go = (url: string, item: any) => {
    this.router.navigate([url, item]);
  }
}
