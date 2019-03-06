import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { CurrencySellingUstdDetailComponent } from '../selling.ustd.detail/selling.ustd.detail';
import { CurrencyService } from '../service';
import {
  Config,
  DefaultDataFormate,
  Log,
  NormalButton, NotNamedButton, TableProps
} from './index';

const { currencySellingUsdtDetail } = Config.userMana;
const console = new Log('CurrencySellingUstdComponent');
const {
  page,
  defaultCurrencyData
} = Config;

@Component({
  selector: 'app-currency-selling-ustd',
  templateUrl: './currency.selling.ustd.html',
  styleUrls: ['./currency.selling.ustd.less']
})

export class CurrencySellingUstdComponent implements OnInit {
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
    private router: Router,
    private cs: CurrencyService,
    private drawerService: NzDrawerService,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;
    this.condition = defaultCurrencyData;

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
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.cs.getSellingList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['订单号', '卖家账号', '出售数量', '单价(CNY)', '总价格(CNY)', '发布时间'],
      column: ['goodsId', 'account', 'stockRes', 'cnyPrice', 'totalAmount', 'createTime'],
      filters: ['account'],
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
    const drawerRef = this.drawerService.create<CurrencySellingUstdDetailComponent, { orderId: number }, string>({
      nzTitle: '订单详情',
      nzWidth: '80%',
      nzContent: CurrencySellingUstdDetailComponent,
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

  cancal = ({ userId, orderId }: any) => {
    // showConfirm(`是否要取消${userId}的订单`, `这无法恢复`, this.modalService, async () => {
    //   const res = await this.cs.cancel({ userId, orderId });
    //   if (checkReq(res)) {
    //     const data = await this.getData({ ...defaultCurrencyData, type: USTD });
    //     await this.setData(data);
    //     this.message.success(`取消${userId}的订单成功`);
    //     return true;
    //   }

    //   return false;
    // });
  }
}
