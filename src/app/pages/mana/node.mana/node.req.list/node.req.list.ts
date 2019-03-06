import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { NormalButton } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import { NodeService } from 'src/app/service/node.service';
import { checkReq, checkStatusList, levelList, showConfirm, Config, Log } from '../index';
const { accountWU, accountID } = Config.userMana;
const { defaultData, page, pageSize } = Config;
const console = new Log('AccountInfoComponent');

@Component({
  selector: 'app-node-reqlist',
  templateUrl: './node.req.list.html',
  styleUrls: ['./node.req.list.less']
})

export class NodeReqListComponent implements OnInit {
  private searchText: string;
  public isPagination = true;
  public data: any[] = undefined;
  public buttonOutput: NormalButton;
  public buttonProps: NormalButton[] = [
    {
      name: '通过',
      type: 'button',
      style: 'success',
      callback: (item: any) => {
        this.check(item);
      }
    },
    {
      name: '驳回',
      type: 'button',
      style: 'delete',
      callback: (item: any) => {
        this.refuse(item);
      }
    }
  ];

  public searchButton = {
    placeholder: '请输入手机号',
    callback: (text: string) => {
      this.search(text, page);
    }
  };

  public paginationButton = {
    callback: (index: number) => {
      this.search(this.searchText, { pageNo: index });
    }
  };

  constructor(
    private router: Router,
    private ns: NodeService,
    private message: NzMessageService,
    private modalService: NzModalService) {
    this.searchText = '';
    this.buttonOutput = {
      name: '导出',
      type: 'button',
      callback: (item: any) => {
        // this.update(item);
      }
    };
  }

  async ngOnInit(): Promise<void> {
    const data = await this.getData(defaultData);
    await this.setData(data);
  }

  async getData(data: any): Promise<any> {
    const res = await this.ns.getNodeReqList(data);
    return res;
  }

  async setData({ data, count }: any): Promise<void> {
    data.map(item => {
      if (item.status !== 0) {
        item.buttonProps = [];
      }

      item.level = levelList[item.level];
      item.status = checkStatusList[item.status];
    });

    this.data = [
      ['申请帐号', '昵称', '当前会员等级', '申请会员等级', '上级节点帐号', '状态'],
      ['account', 'nickName', 'level', 'apply', 'superior', 'status'],
      data,
      count
    ];
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  /***
   * 这里需要使用箭头函数来获取全局data
   * 否则就为 buttonProps.data 为undefined
   */
  search = async (text: string, pager: any) => {
    const condition = { account: text, ...pager};
    const data = await this.getData(condition);
    await this.setData(data);
    this.setSearchText(text);
    return;
  }

  refuse = ({ id, account }) => {
    showConfirm(`要拒绝${account}的申请吗吗`, `这将无法恢复!!!!`, this.modalService, async () => {
      const res = await this.ns.checkRequest({ id, status: 2 });
      if (checkReq(res)) {
        const data = await this.getData(defaultData);
        await this.setData(data);
        this.message.success(`已拒绝${account}节点申请`);
      }
    });
  }

  check = ({ id, account }) => {
    showConfirm(`要通过${account}的申请吗`, `这将无法恢复!!!!`, this.modalService, async () => {
      const res = await this.ns.checkRequest({ id, status: 1 });
      if (checkReq(res)) {
        const data = await this.getData(defaultData);
        await this.setData(data);
        this.message.success(`已通过${account}节点申请`);
      }
    });
  }

  getButtonProps(): NormalButton[] {
    return [
      {
        name: '通过',
        type: 'button',
        style: 'success',
        callback: (item: any) => {
          this.check(item);
        }
      },
      {
        name: '驳回',
        type: 'button',
        style: 'delete',
        callback: (item: any) => {
          this.refuse(item);
        }
      }
    ];
  }

  go = (url: string) => {
    this.router.navigate([url]);
  }
}
