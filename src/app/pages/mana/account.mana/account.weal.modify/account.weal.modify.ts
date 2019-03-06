import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import {
  formDate,
  AccountService,
  Config,
  Log
} from './index';

const console = new Log('AccountWealComponent');
const { defaultData, page, pageSize } = Config;
const { accountWU } = Config.userMana;

@Component({
  selector: 'app-account-weal-modify',
  templateUrl: './account.weal.modify.html',
  styleUrls: ['./account.weal.modify.less']
})

export class AccountWealModifyComponent implements OnInit {
  private searchText: string;
  public isPagination = true;
  public data: any = undefined;
  public searchButton = {
    placeholder: '管理员帐号',
    callback: (text: string) => {
      this.search(text, page);
    }
  };

  public paginationButton = {
    callback: (index: number) => {
      this.search(this.searchText, { page: index });
    }
  };

  constructor(private as: AccountService, private router: Router, private message: NzMessageService) {
    this.searchText = '';
  }

  async ngOnInit(): Promise<void> {
    try {
      const data = await this.getData(defaultData);
      this.setData(data);
    } catch (error) {

    }
  }

  async getData(data: any): Promise<any> {
    return await this.as.getWealModifyList(data);
  }

  async setData({ updateList, count }: any): Promise<void> {
    // data.logs.map(item => { item.modifyTime = formDate(item.modifyTime); });
    // console.logger('logs', data.logs);
    if (updateList) {
      updateList.map(item => item.timeStr = formDate(item.time));
    }

    this.data = [
      ['手机号', '操作管理员', '原CAWD数量', '更新后CAWD数量', '更新前USDT数量', '更新后USDT数量', '时间'],
      ['phone', 'account', 'oldCawd', 'newCawd', 'oldUsdt', 'newUsdt', 'timeStr'],
      updateList,
      count
    ];
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = async (text: string, pager: any) => {
    const condition = { userId: text, ...pager };
    const data = await this.getData(condition);
    await this.setData(data);
    this.setSearchText(text);
    return;
  }

  update = (item: any, router: Router) => {
    this.router.navigate([accountWU, { userId: item.userId, account: item.phone }]);
  }
}
