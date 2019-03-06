import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { WealService } from '../weal.eth';
import {
  checkReq,
  itemStatus,
  showConfirm,
  Config,
  Log,
  MarketService,
  NormalButton,
  NotNamedButton
} from './index';

const console = new Log('WealImaccComponent');
const { marketUpdate, marketAdd } = Config.userMana;
const {
  defaultData,
  page,
  pageSize,
  defaultProductOrderData,
  defaultWealData
} = Config;

@Component({
  selector: 'app-weal-imacc',
  templateUrl: './weal.imacc.html',
  styleUrls: ['./weal.imacc.less']
})

export class WealImaccComponent implements OnInit {
  private searchText: string;
  public isPagination: boolean;
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;
  public addButton: NormalButton;
  public buttonProps: NormalButton[] | [];
  public data: any[];

  constructor(
    private ws: WealService,
    private router: Router,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = false;
    this.data = [];
    this.buttonProps = [];

    this.searchButton = {
      callback: (text: string) => {
        this.search(text, page);
      }
    };

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { page: index - 1, pageSize });
      }
    };

    this.addButton = {
      name: '添加商品',
      type: 'button',
      style: 'success',
      callback: () => { }
    };
  }

  async ngOnInit(): Promise<any> {
    const data = await this.getData({ ...defaultWealData, type: 'IMACC' });
    await this.setData(data);
  }

  async getData(data: any): Promise<any> {
    return await this.ws.getWealList(data);
  }

  async setData({ content, totalElements }: any): Promise<any> {

    this.data = [
      ['用户ID', '理财本金', '理财月份', '起购时间', '剩余天数'],
      ['userId', 'capital', 'monthType', 'createTime', 'remainingDay'],
      content,
      totalElements
    ];
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = async (text: string, pager: any) => {
    const condition = { ...pager, userId: text };
    const data = await this.getData(condition);
    await this.setData(data);
    this.setSearchText(text);
    return;
  }

  update = (item: any) => {
    this.router.navigate([marketUpdate, { ...item }]);
    return;
  }

  // unShelf = ({ goodsId, goodsName }) => {
  //   showConfirm(`是否要下架${goodsName}`, `下架后不会删除商品,可重新上架`, this.modalService, async () => {
  //     const res = await this.ms.unsetItem({ goodsId });
  //     if (checkReq(res)) {
  //       const data = await this.getData(defaultProductOrderData);
  //       await this.setData(data);
  //       this.message.success(`下架${goodsName}成功`);
  //       return true;
  //     }

  //     return false;
  //   });
  // }

  // delete = ({ goodsId, goodsName }) => {
  //   showConfirm(`是否要删除${goodsName}`, `删除后不可恢复`, this.modalService, async () => {
  //     const res = await this.ms.deleteItem({ goodsId });
  //     if (checkReq(res)) {
  //       const data = await this.getData(defaultProductOrderData);
  //       await this.setData(data);
  //       this.message.success(`删除${goodsName}成功`);
  //       return true;
  //     }

  //     return false;
  //   });
  // }

  /**
   * 上架商品
   */
  // shelf = ({ goodsId, goodsName }) => {
  //   showConfirm(`是否要上架${goodsName}`, `上架后可重新下架`, this.modalService, async () => {
  //     const res = await this.ms.shelfItem({ goodsId });
  //     if (checkReq(res)) {
  //       const data = await this.getData(defaultProductOrderData);
  //       await this.setData(data);
  //       this.message.success(`上架${goodsName}成功`);
  //       return true;
  //     }

  //     return false;
  //   });
  // }

  add = () => {
    this.router.navigate([marketAdd]);
  }
}
