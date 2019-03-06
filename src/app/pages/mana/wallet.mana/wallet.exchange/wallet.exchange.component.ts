import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { WalletService } from 'src/app/service/wallet.service';
import { Config, DefaultDataFormate, NormalButton, NotNamedButton, TableProps } from './index';

const { defaultWalletData, page, pageSize } = Config;

@Component({
  selector: 'app-wallet-exchange',
  templateUrl: './wallet.exchange.component.html',
  styleUrls: ['./wallet.exchange.component.less']
})

export class WalletExchangeComponent implements OnInit {

  private searchText: string;
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
        this.search(this.searchText, { page: index, pageSize });
      }
    };
  }

  ngOnInit(): void {
    this.setData(defaultWalletData);
  }

  setData(data: any): void {
    this.ws.getExchangeList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['兑换人手机号', '兑换发财树数量', '每棵单价', '花费总价', '时间'],
      column: ['account', 'number', 'unitPrice', 'totalPrice', 'createTime'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    const condition = { account: text, ...pager };
    this.setData(condition);
    this.setSearchText(text);
    return true;
  }

}
