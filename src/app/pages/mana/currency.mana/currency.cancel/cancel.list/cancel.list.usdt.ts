import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { DefaultDataFormate, LoginService, TableProps } from '../../../weal.mana';
import { CurrencyCancelDetailComponent } from '../cancel.detail/currency.cancel.detail';
import {
  checkReq,
  formDate,
  showConfirm,
  Config, CurrencyService,
  IMACC,
  Log,
  NormalButton,
  NotNamedButton,
  USTD
} from './index';

const { currencySellingUsdtDetail } = Config.userMana;
const console = new Log('CurrencyCancelComponent');
const {
  page, pageSize,
  defaultAccountData,
  defaultCurrencyData
} = Config;

@Component({
  selector: 'app-currency-cancal-list',
  templateUrl: './cancel.list.usdt.html',
  styleUrls: ['./cancel.list.usdt.less']
})

export class CurrencyCancelListComponent implements OnInit {
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
    this.condition = { ...defaultCurrencyData, status: 0};

    this.buttonProps = [
      // {
      //   name: '详情',
      //   type: 'button',
      //   style: 'info',
      //   callback: (item) => {
      //     this.open(item);
      //   }
      // }
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
      // }
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
    const drawerRef = this.drawerService.create<CurrencyCancelDetailComponent, { orderId: number }, string>({
      nzTitle: '订单详情',
      nzWidth: '80%',
      nzContent: CurrencyCancelDetailComponent,
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
}
