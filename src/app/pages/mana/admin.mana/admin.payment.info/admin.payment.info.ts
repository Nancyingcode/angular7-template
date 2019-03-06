import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { NormalButton } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import { AdminService } from '../admin.add';
import { AdminPaymentUpdataComponent } from '../admin.payment.update/admin.payment.update';
import {
  userLevels, Config,
  DefaultDataFormate,
  FORMATE, Log,
  RANDOM,
  STATIC, TableProps
} from '../index';

const { defaultData, defaultAccountData, page, pageSize } = Config;
const console = new Log('AccountPaymentInfoComponent');

@Component({
  selector: 'app-account-payment-info',
  templateUrl: './admin.payment.info.html',
  styleUrls: ['./admin.payment.info.less']
})

export class AdminPaymentInfoComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public data: TableProps;
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
    private as: AdminService,
    private drawerService: NzDrawerService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = false;
    this.isLoading = false;
    this.condition = defaultAccountData;
    this.data = {
      title: [],
      column: [],
      list: [],
      count: 0
    };

    this.buttonProps = [
      {
        name: '修改',
        type: 'button',
        style: 'default',
        callback: this.updatePayment
      }
      // {
      //   name: '推荐人',
      //   type: 'button',
      //   style: 'info',
      //   callback: (item) => {
      //     this.invite(item);
      //   },
      // }
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
    this.as.getPaymentList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    this.data = {
      title: ['手机号', '开户行', '开户支行', '银行卡号'],
      column: ['phone', 'bank', 'openBank', 'bankCard'],
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

  updatePayment = (item: any): void => {
    const drawerRef = this.drawerService.create<AdminPaymentUpdataComponent, { data: any }, boolean>({
      nzTitle: '修改收款银行',
      nzWidth: '600px',
      nzContent: AdminPaymentUpdataComponent,
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
