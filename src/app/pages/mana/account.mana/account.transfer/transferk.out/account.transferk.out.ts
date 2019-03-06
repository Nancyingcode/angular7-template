import { Component, Injectable, OnInit } from '@angular/core';

import {
  formDate,
  statusList,
  AccountService,
  Config,
  DefaultDataFormate,
  Log,
  NormalButton,
  NotNamedButton,
  TableProps
} from './index';

const { defaultTransferData, page, pageSize } = Config;
const console = new Log('AccountTransferOutComponent');

@Component({
  selector: 'app-account-transfer-out',
  templateUrl: './account.transferk.out.html',
  styleUrls: ['./account.transferk.out.less']
})

export class AccountTransferOutComponent implements OnInit {
  private searchText: string;
  public isPagination: boolean;
  public data: TableProps;
  public service: AccountService;
  public buttons: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(private as: AccountService) {
    this.searchText = '';
    this.isPagination = true;
    this.data = {
      title : [],
      column: [],
      list  : [],
      count : 0
    };

    this.buttons = [
      {
        name: '修改',
        type: 'button',
        callback: () => { }
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
        this.search(this.searchText, { page: index , pageSize });
      }
    };
  }

  ngOnInit(): void {
    this.setData(defaultTransferData);
  }

  setData(data: any): void {
    this.as.getTransferOutList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['用户手机号', '姓名', '对方手机号', '对方姓名', '转账金额', '转账时间'],
      column: ['phone', 'name', 'receiver', 'receiverName', 'number', 'createTime'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): void => {
    const condition = { phone: text, ...pager };
    this.setData(condition);
    this.setSearchText(text);
    return;
  }
}
