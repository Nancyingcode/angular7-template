import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injectable, Input, OnChanges, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import {
  getObjectFromStorage, hasOwnProperty,
  menu, setObjectToStorage, Config, List,
  Log, MENU,
  MENU_MAP,
  SELECTED_ITEM
} from '../index';

import * as _ from 'lodash';

const { admin, account } = Config.userMana;
const console = new Log('ListComponet');

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.less']
})

export class ListComponent implements OnInit, OnChanges {
  @Input() list: List[];
  public storageList: any;
  public selectedList: List;
  public isCollapsed: boolean;
  public menuMap: any;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    this.isCollapsed = true;
    this.storageList = undefined;
    this.selectedList = { url: '', name: '' };
    this.menuMap = {};
  }

  ngOnInit(): void {
    // this.change();
    // this.setList();
    this.rewriteMenu();
    this.setDefaultItem();
    if (_.isEmpty(getObjectFromStorage(MENU_MAP))) {
      this.getMenuMap();
    }

    this.setMenuMap(getObjectFromStorage(MENU_MAP));
    // console.logger('init', this.selectedList.url);
  }

  rewriteMenu(): void {
    const [firstMenu] = menu[0];
    if (hasOwnProperty(firstMenu, 'children')) {
      const [children] = firstMenu.children;
      if (isPlatformBrowser(this.platformId)) {
        if (!sessionStorage.getItem(SELECTED_ITEM)) {
          sessionStorage.setItem(SELECTED_ITEM, JSON.stringify(children));
        }
      }
    }
  }

  ngOnChanges(): void {
    // this.change(); // list更新时候也刷新
    this.setDefaultItem();
    // console.logger('change', this.selectedList.url);
  }

  getMenuMap(): void {
    const arr = {};
    this.list.forEach(item => this.makeMenuTree(arr, item));
    console.log(this.list);
    setObjectToStorage(MENU_MAP, arr);
  }

  makeMenuTree(arr: any, item: any): void {
    arr[item.label] = item.open;

    if (this.hasChildren(item)) {
      this.makeMenuTree(arr, item.children);
    }
  }

  setMenuMap(value: any): void {
    this.menuMap = value;
  }

  /**
   *
   * 改变开关的状态
   */
  changeOpenStatus(item: any): void {
    const menuMap = getObjectFromStorage(MENU_MAP);

    // true => false ; false => true
    menuMap[item.label] = !menuMap[item.label];

    setObjectToStorage(MENU_MAP, menuMap);
  }

  changeChildrenOpenStatus(): void {
    const menuMap = getObjectFromStorage(MENU_MAP);
  }

  /**
   *
   * 设置选择的list
   * 并跳转到它
   */
  select(list?: List): void {
    this.selectedList = list;
    // console.logger('select', list.url);
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(SELECTED_ITEM, JSON.stringify(this.selectedList));
    }

    if (list.url) {
      this.go(list.url);
    }
  }

  setDefaultItem(): void {
    this.selectedList = JSON.parse(this.getFormStorage());
    // console.logger('set', this.selectedList.url, this.selectedList, this.getFormStorage(), item);
  }

  getFormStorage(): string {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(SELECTED_ITEM);
    }

    return '';
  }

  change(): void {
    this.setDefaultItem();
    this.go(this.selectedList.url);
  }

  hasChildren(target: any): boolean {
    return hasOwnProperty(target, 'children');
  }

  go(url: string): void {
    this.router.navigate([url]);
  }

  getFirstObj(obj: any): any {
    const [first] = obj;
    const [firstChild] = first.children;
    return firstChild;
  }

}
