import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';

import {
  AccountService,
  Config,
  DefaultDataFormate,
  Log,
  NormalButton,
  NotNamedButton,
  TableProps,
  TabComponent,
  TabDirective
} from '../index';
import { TabItem } from '../tab.item';
import { WalletTabService } from '../tab.service';

const { defaultData, defaultTransferData, page, pageSize } = Config;
const console = new Log('WalletComponent');

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less']
})
export class WalletComponent implements OnInit {
  @ViewChild(TabDirective) tabHost: TabDirective;
  public currentIndex: number | string;
  public titles: string[];
  public tabItems: TabItem[];

  constructor(
    private as: AccountService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ts: WalletTabService) {
    this.currentIndex = 0;
    this.tabItems = this.ts.getTabs();

    this.titles = [
      '收款记录',
      '付款记录'
    ];
  }

  ngOnInit(): void {
    this.selectComponent(0);
  }

  selectComponent(index?: number | string): void {
    this.currentIndex = index;

    const tabItem = this.tabItems[index];

    const componentFactory = this
    .componentFactoryResolver
    .resolveComponentFactory(tabItem.component);

    const viewContainerRef = this.tabHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

  }
}
