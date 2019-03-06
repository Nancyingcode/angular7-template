import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { NormalButton } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import { accountStatus } from '../..';
import { AccountAddComponent } from '../account.add/account.add';
import {
  Config, DefaultDataFormate,
  Log,
  NotNamedButton, PAGE,
  TableProps
} from '../index';
import { AccountDetailCenterComponent } from './account.detail/center/detail.center';

const { defaultData, defaultAccountData, page, pageSize } = Config;
const console = new Log('AccountInfoComponent');

@Component({
  selector: 'app-account-info',
  templateUrl: './account.info.html',
  styleUrls: ['./account.info.less']
})

export class AccountInfoComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public isLoading: boolean;
  public data: TableProps;
  public buttonAdd: NormalButton;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;
  public filter: (text: string, column: string) => void;

  constructor(
    private router: Router,
    private as: AccountService,
    private drawerService: NzDrawerService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = true;
    this.isLoading = false;
    this.condition = defaultAccountData;
    this.data = {
      title: [],
      column: [],
      list: [],
      count: 0
    };

    this.buttonAdd = {
      name: '创建帐号',
      type: 'button',
      callback: () => {
        this.add();
      }
    };

    this.searchButton = {
      placeholder: '请输入账号',
      callback: (text: string) => {
        this.search(text, page);
      }
    };

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { ...this.condition, [PAGE]: index });
      }
    };

    this.buttonProps = [
      {
        name: '详情',
        type: 'button',
        style: 'info',
        callback: (item) => {
          this.detail(item);
        }
      }
    ];

    this.filter = (text: string, column: string) => {
      this.search(text, { ...this.condition, [column]: text });
    };
  }

  ngOnInit(): void {
    try {
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getAccountList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    this.data = {
      title: ['手机号', '钱包地址', '创建时间', '操作'],
      column: [ 'phone', 'receiveAddress', 'createTime'],
      filters: ['phone'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager: any): void => {
    this.condition = { ...pager };
    this.setData(this.condition);
    this.setSearchText(text);
    return;
  }

  detail = (item: any): void => {
    const drawerRef = this.drawerService.create<AccountDetailCenterComponent, { item: any }, string>({
      nzTitle: '个人详情',
      nzWidth: '80%',
      nzContent: AccountDetailCenterComponent,
      nzContentParams: { item }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (data) {
        this.setData(page);
      }
    });
  }

  close(): void {
    this.drawerTemplate.close();
  }

  add = (): void => {
    const drawerRef = this.drawerService.create<AccountAddComponent, { item: any }, string>({
      nzTitle: '添加账号',
      nzWidth: '80%',
      nzContent: AccountAddComponent,
      nzContentParams: { item: '' }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (data) {
        this.setData(page);
      }
    });
  }

  // detail = (item: any) => {
  //   this.router.navigate([accountID, { ...item }]);
  // }

  go = (url: string) => {
    this.router.navigate([url]);
  }
}
