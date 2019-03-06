import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { CurrencyService } from 'src/app/service/currency.service';
import { NodeService } from 'src/app/service/node.service';
import { DefaultDataFormate, TableProps } from '../check.eth';
import { CurrencyCheckUstdDetailComponent } from '../check.ustd.detail/check.ustd.detail';
import {
  checkReq,
  currencyCheckDown,
  formDate,
  showConfirm,
  Config, DefaultDropDown,
  FAILED,
  IMACC, Log, NormalButton,
  NotNamedButton,
  TODO
} from './index';

const console = new Log('AccountInfoComponent');
const {
  host, page,
  downloadUrl, pageSize,
  defaultCurrencyCheckData
} = Config;

@Component({
  selector: 'app-currency-check-ustd',
  templateUrl: './currency.check.ustd.html',
  styleUrls: ['./currency.check.ustd.less']
})

export class CurrencyCheckUstdComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public dropDown: DefaultDropDown;
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
    this.dropDown = currencyCheckDown;
    this.condition = { ...defaultCurrencyCheckData };

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
      this.condition = { ...this.condition, status: 2 };
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.cs.getCheckList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
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

  getButtonGroup(): NormalButton[] {
    return [
      {
        name: '详情',
        type: 'button',
        style: 'info',
        callback: (item: any) => {
          this.open(item);
        }
      },
      {
        name: '通过',
        type: 'button',
        style: 'disable',
        callback: (item: any) => {
          this.close();
        }
      }
    ];
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
    const drawerRef = this.drawerService.create<CurrencyCheckUstdDetailComponent, { orderId: number }, string>({
      nzTitle: '订单详情',
      nzWidth: '80%',
      nzContent: CurrencyCheckUstdDetailComponent,
      nzContentParams: {
        orderId: item.orderId
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

  select = (index: string): void => {
    switch (index) {
      case TODO: {
        this.condition = { ...this.condition, status: 2 };
        this.setData(this.condition);
        break;
      }

      case FAILED: {
        this.condition = { ...this.condition, status: 3 };
        this.setData(this.condition);
        break;
      }
    }
  }
}
