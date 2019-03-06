import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import { hasOwnProperty } from '../tab';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-account-detail-center',
  templateUrl: './detail.center.html',
  styleUrls: ['./detail.center.less']
})

export class AccountDetailCenterComponent implements OnInit {
  @Input() item: any;
  public tabItems: any;

  constructor(private ts: TabService) {
      this.item = undefined;
  }

  ngOnInit(): void {
    this.tabItems = this.ts.getTabs();
  }
}
