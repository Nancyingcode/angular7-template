import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { CurrencyRefuseDetailComponent } from '../refuse.detail/currency.refuse.detail';
import {
  Config, CurrencyService,
  DefaultDataFormate,
  Log, LoginService, NormalButton,
  NotNamedButton,
  TableProps
} from './index';

const { currencySellingUsdtDetail } = Config.userMana;
const console = new Log('CurrencyRefuseListComponent');
const {
  page, pageSize,
  defaultAccountData,
  defaultCurrencyData
} = Config;

@Component({
  selector: 'app-currency-refuse-list',
  templateUrl: './currency.refuse.list.html',
  styleUrls: ['./currency.refuse.list.less']
})

export class CurrencyRefuseListComponent implements OnInit {
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
    private ls: LoginService,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;
    this.condition = { ...defaultCurrencyData, type: 4};

    this.buttonProps = [
      {
        name: '详情',
        type: 'button',
        style: 'info',
        callback: (item) => {
          this.open(item);
        }
      }
    ];

    this.searchButton = {
      placeholder: '管理员帐号',
      callback: (text: string) => {
        this.search(text, page);
      }
    };

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { ...this.condition, page: index});
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
    this.cs.getCheckList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['订单号', '卖家手机号', '出售数量', '单价', '总价格', '发布时间'],
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
    const drawerRef = this.drawerService.create<CurrencyRefuseDetailComponent, { orderId: number }, string>({
      nzTitle: '订单详情',
      nzWidth: '80%',
      nzContent: CurrencyRefuseDetailComponent,
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
