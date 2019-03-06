import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { LineUpService } from 'src/app/service/line-up.service';
import {
  AdminService, Config,
  DefaultDataFormate,
  LoginService, NormalButton,
  NotNamedButton,
  PAGE,
  TableProps
} from './index';

const { defaultLineUpData } = Config;

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})

export class OrderListComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public isLoading: boolean;
  public buttonAdd: NormalButton;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;
  public filter: (text: string, column: string) => void;

  constructor(
    private router: Router,
    private lus: LineUpService,
    private drawerService: NzDrawerService,
    private modalService: NzModalService,
    private ls: LoginService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isLoading = false;
    this.isPagination = true;
    this.condition = defaultLineUpData;
    this.data = {
      title : [],
      column: [],
      list  : [],
      count : 0
    };

    this.searchButton = {
      callback: (text: string) => {
        this.search(text, { ...this.condition });
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
    try {
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.lus.getList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['手机号', '拍单金额', '当前收益', '状态', '开始时间'],
      column: ['phone', 'etcNum', 'profitEtcNum', 'statusStr', 'startTimeStr'],
      filters: ['phone'],
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

}
