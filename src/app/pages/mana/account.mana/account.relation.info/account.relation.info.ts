import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { NormalButton, PointerButton, TableProps } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import { AccountInviterComponent } from '../account.info/account.detail/inviter/inviter';
import {
  Config,
  DefaultDataFormate, Log
} from '../index';
const { accountWU, accountI, accountAdd, accountRelationDetail } = Config.userMana;
const { page, pageSize, defaultAccountData } = Config;

@Component({
  selector: 'app-account-relation-info',
  templateUrl: './account.relation.info.html',
  styleUrls: ['./account.relation.info.less']
})

export class AccountRelationInfoComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private userId: number;
  private condition: any;
  public isPagination: boolean;
  public data: TableProps;
  public props: PointerButton;
  public buttonAdd: NormalButton;
  public buttonProps: NormalButton[];
  public isLoading: boolean;

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
    private route: ActivatedRoute,
    private as: AccountService,
    private drawerService: NzDrawerService,
    private message: NzMessageService) {
    this.userId = 0;
    this.searchText = '';
    this.isPagination = true;
    this.isLoading = false;
    this.data = undefined;
    this.buttonAdd = {
      name: '创建帐号',
      type: 'button',
      callback: () => { }
    };

    this.condition = defaultAccountData;

    this.buttonProps = [
      {
        name: '邀请人列表',
        type: 'button',
        style: 'info',
        callback: this.inviterDrawer
      }
    ];
  }

  ngOnInit(): void {
    try {
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getRelationList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    this.data = {
      title: [
        '手机号',
        '姓名',
        '我的业务码',
        '我的总业绩',
        '邀请人数',
        '我邀请的人'
      ],
      column: ['phone', 'realname', 'inviteCode', 'invitationNumber', 'total'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager: any): void => {
    const condition = { ...pager, phone: text };
    this.setData(condition);
    this.setSearchText(text);
    return;
  }

  inviterDrawer = (item: any): void => {
    const drawerRef = this.drawerService.create<AccountInviterComponent, { data: any }, string>({
      nzTitle: '邀请人列表',
      nzWidth: '80%',
      nzContent: AccountInviterComponent,
      nzContentParams: {
        data: item
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      if (data) {
        this.setData(page);
      }
    });
  }

  close(): void {
    this.drawerTemplate.close();
  }
}
