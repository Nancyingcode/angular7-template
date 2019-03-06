import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import {
  formDate,
  teamLevels, AccountService,
  Config,
  Log
} from './index';

const console = new Log('AccountWealComponent');
const { defaultData, page, pageSize } = Config;
const { accountWU } = Config.userMana;

@Component({
  selector: 'app-account-level-modify',
  templateUrl: './account.level.modify.html',
  styleUrls: ['./account.level.modify.less']
})

export class AccountLevelModifyComponent implements OnInit {
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
      this.search(this.searchText, { pageNo: index });
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
    return await this.as.getLevelModifyList(data);
  }

  async setData({ updateList, count }: any): Promise<void> {
    // data.logs.map(item => { item.modifyTime = formDate(item.modifyTime); });
    // console.logger('logs', data.logs);
    if (updateList) {
      updateList.map(item => {
        item.timeStr = formDate(item.time);
        item.oldLevelStr = teamLevels[item.oleLevel]; // 用户等级
        item.newLevelStr = teamLevels[item.newLevel]; // 团队等级
      });
    }

    this.data = [
      ['手机号', '操作管理员', '原团队等级', '更新后团队等级', '时间'],
      ['phone', 'account', 'oldLevelStr', 'newLevelStr', 'timeStr'],
      updateList,
      count
    ];
  }

  setSearchText(searchText: string): any { this.searchText = searchText; }

  search = async (text: string, pager: any) => {
    const condition = { account: text, ...pager };
    const data = await this.getData(condition);
    await this.setData(data);
    this.setSearchText(text);
    return;
  }

  update = (item: any, router: Router) => {
    this.router.navigate([accountWU, { userId: item.userId, account: item.phone }]);
  }
}
