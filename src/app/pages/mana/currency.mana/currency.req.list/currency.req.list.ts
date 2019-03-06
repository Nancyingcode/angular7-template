import { Component, Injectable, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { NodeService } from 'src/app/service/node.service';
import {
  checkReq,
  formDate,
  showConfirm,
  Config, CurrencyService,
  DefaultDataFormate,
  IMACC,
  Log,
  LoginService,
  NormalButton, NotNamedButton, TableProps, USTD
} from './index';

const { currencySellingUsdtDetail } = Config.userMana;
const console = new Log('CurrencyRequestUstdComponent');
const {
  page, pageSize,
  defaultAccountData,
  defaultCurrencyData
} = Config;

@Component({
  selector: 'app-currency-reqlist',
  templateUrl: './currency.req.list.html',
  styleUrls: ['./currency.req.list.less']
})

export class CurrencyRequestModifyListComponent implements OnInit {
  private searchText: string;
  public isPagination: boolean;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private cs: CurrencyService,
    private ls: LoginService,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;

    this.buttonProps = [
      {
        name: '通过',
        type: 'button',
        style: 'success',
        callback: (item: any) => {
          this.confirm(item);
        }
      },
      {
        name: '驳回',
        type: 'button',
        style: 'delete',
        callback: (item: any) => {
          this.refuse(item);
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
        this.search(this.searchText, { page: index, pageSize });
      }
    };
  }

  ngOnInit(): void {
    try {
      this.setData({ ...defaultCurrencyData, type: 5});
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
      column: ['account', 'password', 'typeStr', 'lastLoginTime', 'lastLoginIp'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    const condition = { ...pager };
    this.setData(condition);
    this.setSearchText(text);
    return true;
  }

  go = (url: string) => {
    this.router.navigate([url]);
  }

  detail = ({ orderId }) => {
    this.router.navigate([currencySellingUsdtDetail, { orderId }]);
  }

  confirm = ({ id }) => {
    // showConfirm(`是否要通过${id}的订单`, `这无法恢复`, this.modalService, async () => {
    //   const res = await this.cs.confirm({
    //     transferBillLogId: id,
    //     adminId: this.ls.getAdminId(),
    //     status: 7
    //   });
    //   if (checkReq(res)) {
    //     const data = await this.getData(defaultAccountData);
    //     await this.setData(data);
    //     this.message.success(`通过${id}的订单成功`);
    //     return true;
    //   }

    //   return false;
    // });
  }

  refuse = ({ id }) => {
    // showConfirm(`是否要驳回${id}的订单`, `这无法恢复`, this.modalService, async () => {
    //   const res = await this.cs.confirm({
    //     transferBillLogId: id,
    //     adminId: this.ls.getAdminId(),
    //     status: 8
    //   });
    //   if (checkReq(res)) {
    //     const data = await this.getData(defaultAccountData);
    //     await this.setData(data);
    //     this.message.success(`已驳回${id}的订单成功`);
    //     return true;
    //   }

    //   return false;
    // });
  }
}
