import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { WalletService } from 'src/app/service/wallet.service';
import { Config, DefaultDataFormate, NormalButton, NotNamedButton, TableProps } from './index';

const { defaultWalletData, page, pageSize } = Config;

@Component({
  selector: 'app-wallet-re-buy',
  templateUrl: './wallet.re-buy.component.html',
  styleUrls: ['./wallet.re-buy.component.less']
})
export class WalletReBuyComponent implements OnInit {
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private ws: WalletService,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;
    this.condition = defaultWalletData;
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
    this.setData(defaultWalletData);
  }

  setData(data: any): void {
    this.ws.getReBuyList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['收款手机号', '收款人', '付款手机号', '付款金额', '付款人', '付款时间'],
      column: ['receiver', 'receiverName', 'phone', 'number', 'name', 'createTime'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    const condition = { ...pager, phone: text };
    this.setData(condition);
    this.setSearchText(text);
    return true;
  }
}
