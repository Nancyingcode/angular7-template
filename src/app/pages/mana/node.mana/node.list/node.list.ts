import { Component, Injectable, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { NormalButton } from 'src/app/interface/component';
import { AccountService } from 'src/app/service/account.service';
import { NodeService } from 'src/app/service/node.service';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
const { accountWU, accountID } = Config.userMana;
const { defaultData, page, host, downloadUrl } = Config;
const { downloadNodeInfo } = Config.apis;
const console = new Log('AccountInfoComponent');

@Component({
  selector: 'app-node-list',
  templateUrl: './node.list.html',
  styleUrls: ['./node.list.less']
})

export class NodeListComponent implements OnInit {
  private searchText: string;
  public isPagination = true;
  public data: any[] = undefined;
  public buttonOutput;

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
    private message: NzMessageService) {
    this.searchText = '';
    this.buttonOutput = {
      name: '导出',
      type: 'button',
      file: '节点列表',
      link: `${downloadUrl}${downloadNodeInfo}`,
      callback: () => {
        this.message.success('正在加载下载资源，请稍后');
      }
    };
  }

  async ngOnInit(): Promise<void> {
    const data = await this.getData(defaultData);
    await this.setData(data);
  }

  async getData(data: any): Promise<any> {
    const res = await this.ns.getNodeList(data);
    return res;
  }

  async setData({ kings, count }: any): Promise<void> {
    this.data = [
      ['帐号', '昵称', '二级节点数', '三级节点数', '帐号总数', 'CAL余额', 'VIT余额', '日产CAL'],
      ['account', 'nickName', 'ClassOneSubordinate', 'ClassTwoSubordinate', 'subordinate', 'calNum', 'vitNum', 'todayProfit'],
      kings,
      count
    ];
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  /***
   * 这里需要使用箭头函数来获取全局data
   * 否则就为 buttonProps.data 为undefined
   */
  search = async (text: string, pager: any) => {
    const condition = { account: text, ...pager };
    const data = await this.getData(condition);
    await this.setData(data);
    this.setSearchText(text);
    return;
  }

  go = (url: string) => {
    this.router.navigate([url]);
  }
}
