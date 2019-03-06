import { Component, Injectable, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import { DropDown, NormalButton, Page } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import {
  dropDown,
  formDate, hasOwnProperty,
  levelList, teamLevels,
  userLevels, Config,
  DefaultDataFormate, Log,
  PointerButton
} from './index';
const { accountWU, accountID, accountAdd, accountRelation } = Config.userMana;
const { defaultAccountData, page, pageSize } = Config;
const console = new Log('AccountRelationDetailComponent');

@Component({
  selector: 'app-account-relation-detail',
  templateUrl: './account.relation.detail.html',
  styleUrls: ['./account.relation.detail.less']
})

export class AccountRelationDetailComponent implements OnInit {
  private searchText: string;
  private selectValue: number;
  private condition: any;
  private userId: number;
  public  isPagination: boolean;
  public  data;
  public  buttonProps: NormalButton[];
  public  isLoading: boolean;
  public  dropDown: DropDown;

  public searchButton = {
    placeholder: '请输入手机号',
    callback: (text: string) => {
      this.search(text, page);
    }
  };

  public paginationButton = {
    callback: (index: number) => {
      this.search(this.searchText, { ...this.condition, pageNo: index });
    }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private as: AccountService,
    private message: NzMessageService) {
    this.selectValue  = 0;
    this.searchText   = '';
    this.isPagination = true;
    this.isLoading    = false;
    this.data         = undefined;
    this.condition = {};
    this.dropDown    = dropDown;
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
      //     this.detail(item);
      //   },
      // }
    ];
  }

  ngOnInit(): void {
    try {
      this.getParams();
      this.setDefaultData();
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  getParams(): void {
    this.route.params.subscribe(item => this.userId = parseInt(item.id, 10));
  }

  setDefaultData(): void {
    this.condition = {
      ...defaultAccountData,
      userId: this.userId
    };
  }

  // tslint:disable-next-line:no-any
  setData(data: any): void {
    this.as.getRelationDetail(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    this.data = {
      title: [
        '手机号',
        '姓名',
        '我的业务码',
        '我的总业绩',
        '我邀请的人'
      ],
      column: ['phone', 'realname', 'inviteCode', 'total'],
      list,
      count
    };
  }

  // async setData({ userList, count }: any): Promise<void> {
  //   if (userList) {
  //     userList.map(item => {
  //       item.levelStr = userLevels[item.level]; // 用户等级
  //       item.operatorLevelStr = teamLevels[item.operatorLevel]; // 团队等级
  //     });
  //   }

  //   this.data = [
  //     [
  //       '代数',
  //       '手机号',
  //       '用户等级',
  //       '团队等级',
  //       '团队业绩'
  //     ],
  //     [
  //       'superiorId',
  //       'mobilePhone',
  //       'levelStr',
  //       'operatorLevelStr',
  //       'achievement'
  //     ],
  //     userList,
  //     count
  //   ];
  // }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  /***
   * 这里需要使用箭头函数来获取全局data
   * 否则就为 buttonProps.data 为undefined
   */
  search = async (text: string, pager: Page) => {
    const condition = {
      phone     : text,
      generation: this.selectValue,
      userId    : this.userId,
      ...pager
    };

    this.setData(this.condition);
    this.setSearchText(text);
    return;
  }
}
