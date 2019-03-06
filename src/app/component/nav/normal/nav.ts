import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import { HomeService } from '../../service';
import { Config, MENU_MAP, SELECTED_ITEM } from '../index';

const { USER_INFO } = Config;
const { login } = Config.routerList;
const { images } = Config;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.less']
})

export class NavComponent implements OnInit {
  public img: string;
  public logOut: string;
  public data: {};
  public list: [];
  public title: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private hs: HomeService,
    private message: NzMessageService) {
    this.img = images.powerOff;
    this.data = undefined;
    this.list = [];
    this.title = 'IMACC管理系统';
    this.logOut = '退出登录';
  }

  loginOut(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem(USER_INFO);
      sessionStorage.removeItem(SELECTED_ITEM);
      sessionStorage.removeItem(MENU_MAP);
    }

    this.router.navigate([login]);
  }

  async ngOnInit(): Promise<void> {
    try {
      // const data = await this.getData();
      // this.setData(data);
    } catch (error) {
      this.message.error('服务器异常，获取头部信息失败');
    }
  }

  async getData(): Promise<unknown>  {
    return await this.hs.getTotalInfo();
  }

  setData(data: {}): void {
    // const labels = [
    //   'APP用户数',
    //   '平台CAWD总和',
    //   '平台USDT总和'
    // ];

    // const columns = [
    //   'registerNum',
    //   'cawdNum',
    //   'usdtNum'
    // ];

    // if (data) {
    //   labels.forEach((item, index) => {
    //     const column = columns[index];
    //     const prop = { name: `${item}: ${data[column]}` };
    //     this.list.push(prop);
    //   });
    // }
  }
}
