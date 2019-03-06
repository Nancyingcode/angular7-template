import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AccountService } from 'src/app/service/account.service';
import {
  Config, DefaultDataFormate,
  Log, NormalButton,
  TableDetailProps, TableProps
} from '../index';

import { NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { WealUpdateComponent } from '../weal.update/weal.update';
import { hasOwnProperty, DefaultDetailDataFormate } from './index';

const { accountWU, accountID, accountAdd } = Config.userMana;
const { defaultAccountData, page, pageSize } = Config;
const console = new Log('AccountWealInfoComponent');

@Component({
  selector: 'app-account-weal-info',
  templateUrl: './account.weal.info.html',
  styleUrls: ['./account.weal.info.less']
})

export class AccountWealInfoComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  @Input() id: number;
  private searchText: string;
  private userId: string;
  private condition: any;
  public isPagination: boolean;
  public data: TableDetailProps;
  public buttonUpdate: NormalButton;
  public buttonProps: NormalButton[];
  public isLoading: boolean;

  public searchButton = {
    placeholder: '请输入手机号',
    callback: (text: string) => {
      this.search(text, page);
    }
  };

  public paginationButton = {
    callback: (index: number) => {
      this.search(this.searchText, { page: index - 1, pageSize });
    }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private drawerService: NzDrawerService,
    private as: AccountService,
    private message: NzMessageService) {
    this.searchText = '';
    this.userId = '';
    this.isPagination = true;
    this.isLoading = false;
    this.data = {
      title : [],
      column: [],
      data  : {}
    };

    this.buttonUpdate = {
      name: '修改资产',
      type: 'button',
      callback: () => {
        this.update();
      }
    };

    this.buttonProps = [
      {
        name: '修改',
        type: 'button',
        style: 'default',
        callback: (item) => {
          this.update(item);
        }
      }
      // {
      //   name: '详情',
      //   type: 'button',
      //   style: 'info',
      //   callback: (item) => {
      //     this.detail(item);
      //   },
      // }
    ];
  }

  ngOnInit(): void {
    try {
      this.condition = { id: this.id };
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  getUserId(): void {
    this.route.params.subscribe(item => {
      if (hasOwnProperty(item, 'id')) {
        this.userId = item.id;
      }
    });
  }

  setData(data: any): void {
    this.as.getWealList(data).subscribe(res => this.patchValue(res));
  }

  patchValue( { data }: DefaultDetailDataFormate ): void {
    this.data = {
      title : ['金币', 'ETH', 'WSBC', '盈利值'],
      column: ['goldCoin', 'eth', 'wsbc', 'revenueAbility'],
      data
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  /***
   * 这里需要使用箭头函数来获取全局data
   * 否则就为 buttonProps.data 为undefined
   */
  search = (text: string, pager: any) => {
    const condition = { phone: text, ...pager};
    this.setData(condition);
    this.setSearchText(text);
    return;
  }

  // update = (item: any) => {
  //   this.router.navigate([accountWU, { ...item }]);
  // }

  update(item?: any): void {
    const drawerRef = this.drawerService.create<WealUpdateComponent, { data: any }, boolean>({
      nzTitle: '资产修改',
      nzWidth: '50%',
      nzContent: WealUpdateComponent,
      nzContentParams: {
        data: { userId: this.userId, ...this.data.data }
      }
    });

    drawerRef.afterOpen.subscribe(() => {

    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'boolean') {
        if (data) {
          this.setData(this.condition);
        }
      }
    });
  }

  close(): void {
    this.drawerTemplate.close();
  }

  detail = ({ account }: any) => {
    this.router.navigate([accountID, { account }]);
  }

  add = () => {
    this.router.navigate([accountAdd]);
  }

  go = (url: string) => {
    this.router.navigate([url]);
  }
}
