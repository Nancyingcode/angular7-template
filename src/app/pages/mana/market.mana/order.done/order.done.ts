import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';
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

const console = new Log('MarketItemComponent');
const { marketUpdate, marketAdd } = Config.userMana;
const {
  defaultData,
  page,
  pageSize,
  defaultProductOrderData
} = Config;

@Component({
  selector: 'app-market-order-done',
  templateUrl: './order.done.html',
  styleUrls: ['./order.done.less']
})

export class MarketOrderDoneComponent implements OnInit {
  private searchText: string;
  public isPagination: boolean;
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;
  public addButton: NormalButton;
  public buttonProps: NormalButton[];
  public data: any[];

  constructor(
    private ms: MarketService,
    private router: Router,
    private modalService: NzModalService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isPagination = true;
    this.data = [];
    this.buttonProps = [
      // {
      //   name: '修改',
      //   type: 'button',
      //   style: 'default',
      //   callback: (item) => {
      //     this.update(item);
      //   }
      // },
      // {
      //   name: '下架',
      //   type: 'button',
      //   style: 'purple',
      //   callback: (item) => {
      //     this.unShelf(item);
      //   }
      // },
      // {
      //   name: '删除',
      //   type: 'button',
      //   style: 'delete',
      //   callback: (item) => {
      //     this.delete(item);
      //   }
      // }
    ];

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

  async ngOnInit(): Promise<void> {
    const data = await this.getData(defaultProductOrderData);
    await this.setData(data);
  }

  async getData(data: any): Promise<any> {
    return await this.ms.getDoneList(data);
  }

  async setData({ content, totalElements }: any): Promise<void> {
    // 下架的商品按钮变为上架
    const arr = [...this.buttonProps];
    arr[1] = {
      name: '上架',
      type: 'button',
      style: 'success',
      callback: (item: any) => {
        this.shelf(item);
      }
    };

    if (content) {
      content.map((item: any) => {
        if (item.type === '2') {
          item.buttonProps = arr;
        }

        item.bigPicture = `<img src="${item.bigPicture}" class="table-image rounded" alt="...">`;
      });
    }

    this.data = [
      ['单号', '用户ID', '产品名称', '产品价格', '收货人姓名', '电话', '收货地址', '下单时间'],
      ['orderId', 'userId', 'goodsName', 'price', 'name', 'phone', 'shippingAddress', 'createTime'],
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

  unShelf = ({ goodsId, goodsName }: any) => {
    showConfirm(`是否要下架${goodsName}`, `下架后不会删除商品,可重新上架`, this.modalService, async () => {
      const res = await this.ms.unsetItem({ goodsId });
      if (checkReq(res)) {
        const data = await this.getData(defaultProductOrderData);
        await this.setData(data);
        this.message.success(`下架${goodsName}成功`);
        return true;
      }

      return false;
    });
  }

  delete = ({ goodsId, goodsName }: any) => {
    showConfirm(`是否要删除${goodsName}`, `删除后不可恢复`, this.modalService, async () => {
      const res = await this.ms.deleteItem({ goodsId });
      if (checkReq(res)) {
        const data = await this.getData(defaultProductOrderData);
        await this.setData(data);
        this.message.success(`删除${goodsName}成功`);
        return true;
      }

      return false;
    });
  }

  /**
   * 上架商品
   */
  shelf = ({ goodsId, goodsName }: any) => {
    showConfirm(`是否要上架${goodsName}`, `上架后可重新下架`, this.modalService, async () => {
      const res = await this.ms.shelfItem({ goodsId });
      if (checkReq(res)) {
        const data = await this.getData(defaultProductOrderData);
        await this.setData(data);
        this.message.success(`上架${goodsName}成功`);
        return true;
      }

      return false;
    });
  }

  add = () => {
    this.router.navigate([marketAdd]);
  }
}
