import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { CurrencyService } from 'src/app/service/currency.service';
import { NodeService } from 'src/app/service/node.service';
import { DefaultDataFormate, TableProps } from '../done.eth';
import { CurrencyDoneUstdDetailComponent } from '../done.ustd.detail/done.ustd.detail';
import {
  formDate,
  AccountService,
  Config,
  IMACC,
  Log, NormalButton,
  NotNamedButton,
  USTD
} from './index';

const { currencyDoneUsdtDetail } = Config.userMana;
const console = new Log('CurrencyDoneUstdComponent');
const {
  page,
  pageSize,
  host,
  downloadUrl,
  defaultCurrencyDoneData
} = Config;

@Component({
  selector: 'app-currency-done-ustd',
  templateUrl: './currency.done.ustd.html',
  styleUrls: ['./currency.done.ustd.less']
})

export class CurrencyDoneUstdComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;
  public filter: (text: string, column: string) => void;

  constructor(
    private cs: CurrencyService,
    private drawerService: NzDrawerService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;
    this.condition = defaultCurrencyDoneData;

    this.buttonProps = [
      {
        name: '详情',
        type: 'button',
        style: 'info',
        callback: (item: any) => {
          this.open(item);
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
        this.search(this.searchText, { ...this.condition, page: index });
      }
    };

    this.filter = (text: string, column: string) => {
      this.search(text, { ...this.condition, [column]: text });
    };
  }

  ngOnInit(): void {
    try {
      this.condition = { ...this.condition, status: 6 };
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.cs.getDoneList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title: [
        '订单号',
        '卖家账号',
        '买家账号',
        '交易数量',
        '单价(CNY)',
        '总价(CNY)',
        '详情'
      ],
      column: [
        'orderId',
        'goodsSellerAccount',
        'buyerAccount',
        'count',
        'cnyPrice',
        'totalAmount'
      ],
      filters: ['orderId', 'goodsSellerAccount', 'buyerAccount'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    this.condition = { ...pager };
    this.setData(this.condition);
    this.setSearchText(text);
    return true;
  }

  open(item: any): void {
    console.log('open');
    const drawerRef = this.drawerService.create<CurrencyDoneUstdDetailComponent, { orderId: number }, string>({
      nzTitle: '订单详情',
      nzWidth: '80%',
      nzContent: CurrencyDoneUstdDetailComponent,
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
