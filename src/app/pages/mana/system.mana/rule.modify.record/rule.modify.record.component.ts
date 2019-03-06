import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { HomeService } from '../service';
import { dropDown, Config, DefaultDataFormate, NormalButton, NotNamedButton, TableProps } from './index';

const { defaultCodeData, page, pageSize } = Config;

@Component({
  selector: 'app-rule-modify-record',
  templateUrl: './rule.modify.record.component.html',
  styleUrls: ['./rule.modify.record.component.less']
})

export class RuleModifyRecordComponent implements OnInit {
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public dropDown: any;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private router: Router,
    private hs: HomeService,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.data = undefined;
    this.isPagination = true;
    this.dropDown = dropDown;
    this.condition = defaultCodeData;

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
    this.select('1');
  }

  setData(index?: string): void {
    const { condition } = this;
    switch (index) {
      case '1': {
        this.hs.getUserCodeModifyList(condition).subscribe(res => this.patchValue(res));
        break;
      }

      default: {
        this.hs.getInitCodeModifyList(condition).subscribe(res => this.patchValue(res));
      }
    }
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    this.data = {
      title: ['用户手机号', '用户姓名', '旧业务码', '新业务码', '操作管理员', '时间'],
      column: ['phone', 'name', 'oldCode', 'newCode', 'adminPhone', 'createTime'],
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    this.condition = { ...pager, phone: text };
    this.setData(this.condition);
    this.setSearchText(text);
    return true;
  }

  select = (value: string): void => {
    this.setData(value);
  }
}
