import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import { ReplyService } from '../../../login';
import {
  formDate,
  hasOwnProperty,
  levelList,
  AccountService,
  Config,
  DefaultDataFormate,
  Log,
  NormalButton,
  NotNamedButton,
  TableProps
} from '../index';

const console = new Log('AccountWealComponent');
const { defaultData, defaultReplyData, page, pageSize } = Config;
const {
  replyDetail
} = Config.userMana;

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply.list.html',
  styleUrls: ['./reply.list.less']
})

export class ReplyListComponent implements OnInit {
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
    private rs: ReplyService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = true;
    this.isLoading = false;
    this.data = {
      title : [],
      column: [],
      list  : [],
      count : 0
    };

    this.buttonAdd = {
      name: '创建帐号',
      type: 'button',
      callback: () => { }
    };

    this.buttonProps = [
      {
        name: '详情',
        type: 'button',
        style: 'info',
        callback: (item) => {
          this.detail(item);
        }
      },
      {
        name: '未回复',
        type: 'button',
        style: 'purple',
        callback: (item) => {
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
        this.search(this.searchText, { page: index - 1, pageSize });
      }
    };
  }

  ngOnInit(): void {
    try {
      this.setData(defaultData);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.rs.getReply(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['账号', '密码', '类型', '最后登录时间', '最后登录IP'],
      column: ['account', 'password', 'typeStr', 'lastLoginTime', 'lastLoginIp'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  /***
   * 这里需要使用箭头函数来获取全局data
   * 否则就为 buttonProps.data 为undefined
   */
  search = (text: string, pager: any): boolean => {
    const condition = { userId: text, ...pager };
    this.setData(condition);
    this.setSearchText(text);
    return true;
  }

  detail = (item): void => {
    this.router.navigate([replyDetail, { ...item }]);
  }
}
