import { Component, Input, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd';
import { DefaultDetailDataFormate, DetailItem } from '../index';
import { AccountService } from '../weal.update';

@Component({
  selector: 'app-drawer-detail',
  templateUrl: './account.detail.compoent.html',
  styles: [`

  `]
})

export class AccountDrawerDetailComponent implements OnInit {
  @Input() data: DetailItem[][];
  private condition: any;
  constructor(
    private message: NzMessageService,
    private as: AccountService) { }

  ngOnInit(): void {
    try {
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getAccountDetail(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ data }: DefaultDetailDataFormate): void {
    this.data = [];
  }
}
