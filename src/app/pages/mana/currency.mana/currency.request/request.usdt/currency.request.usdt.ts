import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { CurrencyRequestUstdDetailComponent } from '../request.usdt.detail/request.usdt.detail';
import {
  currencyRequestDropDown,
  showConfirm,
  Config,
  CurrencyService, DefaultDataFormate,
  DefaultDropDown,
  FAILED,
  Log,
  LoginService,
  NormalButton,
  NotNamedButton, TableProps, TODO
} from './index';

const { currencySellingUsdtDetail } = Config.userMana;
const console = new Log('CurrencyRequestUstdComponent');
const {
  page, pageSize,
  defaultAccountData,
  defaultCurrencyRequestData
} = Config;

@Component({
  selector: 'app-currency-request-ustd',
  templateUrl: './currency.request.usdt.html',
  styleUrls: ['./currency.request.usdt.less']
})

export class CurrencyRequestUstdComponent implements OnInit {
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
    private ls: LoginService,
    private drawerService: NzDrawerService,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;
    this.dropDown = currencyRequestDropDown;
    this.condition = defaultCurrencyRequestData;

    this.buttonProps = [
      // {
      //   name: '通过',
      //   type: 'button',
      //   style: 'success',
      //   callback: (item: any) => {
      //     this.confirm(item);
      //   }
      // },
      // {
      //   name: '驳回',
      //   type: 'button',
      //   style: 'delete',
      //   callback: (item: any) => {
      //     this.refuse(item);
      //   }
      // },
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

    this.filter = (text: string, column: string) => {
      this.search(text, { ...this.condition, [column]: text });
    };
  }

  ngOnInit(): void {
    try {
      this.condition = { ...this.condition, status: 4 };
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
      title : [
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
    const drawerRef = this.drawerService.create<CurrencyRequestUstdDetailComponent, { orderId: number }, boolean>({
      nzTitle: '订单详情',
      nzWidth: '80%',
      nzContent: CurrencyRequestUstdDetailComponent,
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

  confirm = ({ tradeNo }) => {
    showConfirm(`通过`, `是否要通过订单${tradeNo}`, this.modalService, async () => {
      this.cs.confirm({}).subscribe(res => {
        if (res) {
          return true;
        }

        return false;
      });

      this.setData(this.condition);
      return false;
    });
  }

  refuse = ({ tradeNo }) => {
    showConfirm(`拒绝`, `是否要拒绝订单${tradeNo}`, this.modalService, async () => {
      this.cs.cancel({}).subscribe(res => {
        if (res) {
          return true;
        }

        return false;
      });

      this.setData(this.condition);
      return false;
    });
  }

  select = (index: string): void => {
    switch (index) {
      case TODO: {
        this.condition = { ...this.condition, status: 4 };
        this.setData(this.condition);
        break;
      }

      case FAILED: {
        this.condition = { ...this.condition, status: 5 };
        this.setData(this.condition);
        break;
      }
    }
  }
}
