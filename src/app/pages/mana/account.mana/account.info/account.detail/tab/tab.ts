import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as _ from 'lodash';
import { ValueService } from '../single';
import {
  accountDetailDropDown,
  AccountService, Config,
  DefaultDropDown, Log,
  PointerButton,
  TabComponent,
  TabDirective
} from './index';

const console = new Log('AccountDetailTabComponent');
const { accountI } = Config.userMana;
const { defaultIncomeData, defaultAccountData, page } = Config;

@Component({
  selector: 'app-account-detail-tab',
  templateUrl: './tab.html',
  styleUrls: ['./tab.less']
})

export class AccountDetailTabComponent implements OnInit {
  @Input() item: any;
  @Input() tabItems: any;
  @ViewChild(TabDirective) tabHost: TabDirective;
  private id: number | string;
  private phone: string;
  public data: any;
  public dropDown: DefaultDropDown;
  public props: PointerButton;
  public titles: string[];
  public currentIndex: number | string;

  constructor(
    private router: Router,
    private as: AccountService,
    private vs: ValueService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute) {
    this.currentIndex = 0;
    this.id = 0;
    this.data = undefined;
    this.props = {
      alert: ['用户信息管理', `用户详情`],
      callback: () => {
        this.goBack();
      }
    };

    this.dropDown = accountDetailDropDown;

    this.titles = [
      '个人详情',
      '好友列表'
    ];
  }

  ngOnInit(): void {
    try {
      const param = this.getParams();
      if (param) {
        this.id = parseInt(param, 10);
      }

      this.selectComponent(0);
    } catch (error) {

    }
    // const data = await this.getData({ userId: this.getParams() });
    // await this.setData(data);
  }

  setPointerProp(): void {
    this.props = {
      alert: ['用户信息管理', `用户详情`],
      callback: () => {
        this.goBack();
      }
    };
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
    // (componentRef.instance as TabComponent).data = tabItem.data;
    (componentRef.instance as TabComponent).id = this.item.id;
    (componentRef.instance as TabComponent).account = this.item.account;

  }

  getParams(): string {
    return this.route.snapshot.paramMap.get('userId');
  }

  goBack = (): void => {
    this.router.navigate([accountI]);
  }

  go = (router, { account }): void => {
    this.router.navigate([router, { account }]);
  }

}
