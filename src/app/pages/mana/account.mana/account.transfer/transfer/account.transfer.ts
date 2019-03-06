import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';

import { TabItem } from '../tab.item';
import { TransferTabService } from '../tab.service';
import {
  AccountService,
  Config,
  DefaultDataFormate,
  Log, NormalButton,
  NotNamedButton,
  PAGE,
  TableProps,
  TabComponent,
  TabDirective
} from './index';

const { defaultData, defaultTransferData, page, pageSize } = Config;
const console = new Log('AccountTransferOutComponent');

@Component({
  selector: 'app-account-transfer',
  templateUrl: './account.transfer.html',
  styleUrls: ['./account.transfer.less']
})

export class AccountTransferComponent implements OnInit {
  @ViewChild(TabDirective) tabHost: TabDirective;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public currentIndex: number | string;
  public titles: string[];
  public filter: (text: string, column: string) => void;
  public tabItems: TabItem[];
  public data: TableProps;
  public service: AccountService;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private as: AccountService,
    private ts: TransferTabService) {
    this.searchText = '';
    this.currentIndex = 0;
    this.isPagination = true;
    this.condition = defaultTransferData;
    this.tabItems = this.ts.getTabs();
    this.data = {
      title : [],
      column: [],
      list  : [],
      count : 0
    };

    this.titles = [
      '转入记录',
      '转出记录'
    ];

    this.buttonProps = [
      {
        name: '详情',
        type: 'button',
        callback: () => { }
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
        this.search(this.searchText, { ...this.condition, [PAGE]: index });
      }
    };

    this.filter = (text: string, column: string) => {
      this.search(text, { ...this.condition, [column]: text });
    };
  }

  ngOnInit(): void {
    this.setData(this.condition);
  }

  setData(data: any): void {
    this.as.getTransferList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['手机号', '币种', '数量', '交易hash', '时间'],
      column: ['phone', 'tokenType', 'tokenNum', 'hash', 'timeStr'],
      filters: ['phone'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any) => {
    this.condition = { ...pager };
    this.setData(this.condition);
    this.setSearchText(text);
    return;
  }
}
