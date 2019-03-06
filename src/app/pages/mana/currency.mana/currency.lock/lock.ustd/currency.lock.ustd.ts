import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { CurrencyService } from 'src/app/service/currency.service';
import { NodeService } from 'src/app/service/node.service';
import { DefaultDataFormate, TableProps } from '../lock.eth';
import { CurrencyLockUstdDetailComponent } from '../lock.ustd.detail/lock.ustd.detail';
import {
  formDate,
  AccountService,
  Config,
  IMACC,
  Log, NormalButton,
  NotNamedButton,
  USTD
} from './index';

const { currencyLockUsdtDetail } = Config.userMana;
const console = new Log('CurrencyLockUstdComponent');
const {
  page,
  pageSize,
  host,
  downloadUrl,
  defaultCurrencyData
} = Config;

@Component({
  selector: 'app-currency-lock-ustd',
  templateUrl: './currency.lock.ustd.html',
  styleUrls: ['./currency.lock.ustd.less']
})

export class CurrencyLockUstdComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private cs: CurrencyService,
    private drawerService: NzDrawerService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;
    this.condition = { ...defaultCurrencyData, type: 2 };

    this.buttonProps = [
      // {
      //   name: '详情',
      //   type: 'button',
      //   style: 'info',
      //   callback: (item: any) => {
      //     this.open(item);
      //   }
      // }
    ];

    this.searchButton = {
      placeholder: '请输入手机号',
      callback: (text: string) => {
        this.search(text, page);
      }
    };

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { ...this.condition, page: index });
      }
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
    this.cs.getLockList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['订单号', '卖家手机号', '出售数量', 'CNY单价', 'CNY总价', '发布时间'],
      column: ['tradeNo', 'sellerTel', 'number', 'cnyUnitPrice', 'cnyTotalPrice', 'createTime'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    const condition = { ...this.condition, ...pager , expression: text };
    this.setData(condition);
    this.setSearchText(text);
    return true;
  }

  open(item: any): void {
    console.log('open');
    const drawerRef = this.drawerService.create<CurrencyLockUstdDetailComponent, { orderId: number }, string>({
      nzTitle: '订单详情',
      nzWidth: '80%',
      nzContent: CurrencyLockUstdDetailComponent,
      nzContentParams: {
        orderId: item.id
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {

      }
    });
  }

  close(): void {
    this.drawerTemplate.close();
  }
}
