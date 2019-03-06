import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd';

// import {} from '';
import { AccountService } from 'src/app/service/account.service';
import { AccountInviterData, Config, DefaultDataFormate, Log, NormalButton, NotNamedButton, PointerButton, PAGE, TableProps } from './index';

const console = new Log('AccountInviterComponent');
const {
  accountI,
  accountID,
  accountInvitersD
} = Config.userMana;

const { page, defaultInviterData } = Config;

@Component({
  selector: 'app-inviter-list',
  templateUrl: './inviter.html',
  styleUrls: ['./inviter.less']
})

export class AccountInviterComponent implements OnInit {
  @Input() id: any;
  private searchText: string;
  private condition: AccountInviterData;
  public isPagination: boolean;
  public data: TableProps;
  public props: PointerButton;
  public buttonProps: NormalButton[];
  public paginationButton: NotNamedButton;

  constructor(
    private as: AccountService,
    private message: NzMessageService,
    private route: ActivatedRoute) {
    this.id = 0;
    this.condition = defaultInviterData;
    this.isPagination = true;
    this.searchText = '';

    this.buttonProps = [
      // {
      //   name: '查看详情',
      //   type: 'button',
      //   callback: (item) => {
      //     this.detail(accountInvitersD, item);
      //   },
      // }
    ];

    this.paginationButton = {
      callback: (index: number) => {
        this.search('', { ...this.condition, [PAGE]: index });
      }
    };
  }

  ngOnInit(): void {
    try {
      this.condition = { ...this.condition, userId: this.id };
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getInviterList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['好友账号', '邀请奖励', '邀请时间'],
      column: ['phone', 'profit', 'timeStr'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager: any): void => {
    const condition = { ...pager };
    this.setData(condition);
    this.setSearchText(text);
    return;
  }

  filter = (text: string, column: string) => {
    this.search(text, { ...this.condition, [column]: text });
  }

}
