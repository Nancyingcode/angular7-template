import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { AccountService } from '../../../../service/account.service';
import { dropDown, Config, DefaultDataFormate, Log, NotNamedButton, TableProps } from './index';
const { defaultData, defaultDrawData, pageSize, page } = Config;
const console = new Log('AccountDrawComponent');

const { userM, account, accountI } = Config.userMana;

const listType = {
  1: 'successRechargeLog',
  0: 'failRechargeLog'
};

@Component({
  selector: 'app-account-draw',
  templateUrl: './account.draw.html',
  styleUrls: ['./account.draw.less']
})

export class AccountDrawComponent implements OnInit {
  private searchText: string;
  private condition: any;
  public dropDown: any;
  public isPagination: boolean;
  public data: TableProps;
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;
  public filter: (text: string, column: string) => void;

  constructor(private as: AccountService, private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = true;
    this.dropDown = dropDown;
    this.condition = defaultDrawData;

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

    this.filter = (text: string, column: string) => {
      this.search(text, { ...this.condition, [column]: text });
    };
  }

  ngOnInit(): void {
    try {
      this.select(1);
    } catch (e) {
      // this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getDrawList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['账号', '币种', '数量', 'Hash值', '时间'],
      column: ['account', 'coinType', 'amount', 'txHash', 'createTime'],
      filters: ['account'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    this.condition = { ...pager, account: text };
    this.setData(this.condition);
    this.setSearchText(text);
    return true;
  }

  select = (value: number): void => {
    this.condition = { ...this.condition, type: value };
    this.setData(this.condition);
  }
}
