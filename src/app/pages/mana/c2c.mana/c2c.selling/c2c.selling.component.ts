import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { C2cService } from '../c2c.service';
import { Config, DefaultDataFormate, NormalButton, NotNamedButton, TableProps } from './index';

const { defaultC2cData, page, pageSize } = Config;
@Component({
  selector   : 'app-c2c-selling',
  templateUrl: './c2c.selling.component.html',
  styleUrls  : ['./c2c.selling.component.less']
})

export class C2cSellingComponent implements OnInit {
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private cs: C2cService,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;
    this.condition = defaultC2cData;
    this.buttonProps = [

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
    this.setData(this.condition);
  }

  setData(data: any): void {
    this.cs.getSellingOrderList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['订单号', '卖家手机号', '买家手机号', '出售数量', '单价', '总价', '交易时间'],
      column: ['tradeNo', 'sellerAcc', 'buyerAcc', 'number', 'usdtUnitPrice', 'usdtTotalPrice', 'createTime'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    const condition = { ...pager, expression: text };
    this.setData(condition);
    this.setSearchText(text);
    return true;
  }
}
