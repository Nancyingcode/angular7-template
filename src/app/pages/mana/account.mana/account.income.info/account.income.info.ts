import { Component, Injectable, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd';
import { newDate, AccountIncomeData } from 'src/app/http';
import { NormalButton } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import {
  formDate,
  hasOwnProperty,
  levelList,
  Config,
  DefaultDataFormate, Log,
  NotNamedButton,
  PointerButton,
  TableProps
} from '../index';
const { accountWU, accountI, accountAdd } = Config.userMana;
const { defaultIncomeData, page, pageSize } = Config;
const console = new Log('AccountIncomeInfoComponent');

@Component({
  selector: 'app-account-income-info',
  templateUrl: './account.income.info.html',
  styleUrls: ['./account.income.info.less']
})

export class AccountIncomeInfoComponent implements OnInit {
  @Input() id: number | string;
  private searchText: string;
  private type: number;
  private condition: any;
  public isPagination: boolean;
  public list: any[];
  public range: any;
  public data: TableProps;
  public buttonAdd: NormalButton;
  public buttonProps: NormalButton[];
  public isLoading: boolean;
  public props: PointerButton;
  public timeSearch: NotNamedButton;
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private as: AccountService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = true;
    this.isLoading = false;
    this.data = undefined;
    this.range = [];
    this.props = {
      alert: ['用户管理', '用户七天收益'],
      callback: () => {
        // this.goBack();
        this.go(accountI);
      }
    };

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

    this.buttonProps = [
      // {
      //   name: '修改',
      //   type: 'button',
      //   style: 'default',
      //   callback: (item) => {
      //     this.update(item);
      //   },
      // },
      // {
      //   name: '详情',
      //   type: 'button',
      //   style: 'info',
      //   callback: (item) => {
      //     // this.detail(item);
      //   },
      // }
    ];

    this.timeSearch = {
      callback: (data) => {
        this.range = data;
        // const a = moment(this.range[0]);
      }
    };
  }

  ngOnInit(): void {
    try {
      this.getParams();
      // this.setData({ ...defaultIncomeData, type: this.type });
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  getParams(): void {
    this.route.data.subscribe(item => {
      this.type = item.type;
    });
  }

  setData(data: AccountIncomeData): void {
    this.condition = data;
    this.as.getIncomeList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    switch (this.type) {
      case 1: {
        this.data = {
          title: ['手机号', '姓名', '收益金额', '下单时间'],
          column: ['phone', 'name', 'profit', 'createTime'],
          list,
          count
        };

        break;
      }

      default: {
        this.data = {
          title: ['手机号', '姓名', '基金类型', '基金名称', '收益金额', '下单时间'],
          column: ['phone', 'name', 'fundType', 'fundName', 'profit', 'createTime'],
          list,
          count
        };
      }
    }
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  /***
   * 这里需要使用箭头函数来获取全局data
   * 否则就为 buttonProps.data 为undefined
   */
  search = (text: string, pager: any) => {
    // const [ startTime, endTime ] = this.range;
    // const condition: AccountIncomeData = {
    //   id: this.id,
    //   startTime,
    //   endTime,
    //   ...pager
    // };
    this.setData({ ...pager, phone: text });
    this.setSearchText(text);
    return;
  }

  update = ({ id }: any): void => {
    this.router.navigate([accountWU, { id }]);
  }

  // detail = ({ account }) => {
  //   this.router.navigate([accountID, { account }]);
  // }

  add = (): void => {
    this.router.navigate([accountAdd]);
  }

  go = (url: string): void => {
    this.router.navigate([url]);
  }
}
