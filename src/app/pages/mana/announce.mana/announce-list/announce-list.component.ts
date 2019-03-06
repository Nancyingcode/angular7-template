import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';

import { NormalButton, NotNamedButton } from 'src/app/interface/component';
import { HomeService } from '../service';
import { showConfirm, Config, DefaultDataFormate, Log, PAGE, TableAnnounceProps } from './index';

import { AnnounceAddComponent } from '../announce-add/announce-add.component';
import { AnnounceUpdateComponent } from '../announce-update/announce-update.component';

const { page, defaultAnnounceData } = Config;
const console = new Log('AnnounceListComponent');

@Component({
  selector: 'app-announce-list',
  templateUrl: './announce-list.component.html',
  styleUrls: ['./announce-list.component.less']
})

export class AnnounceListComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  public buttonProps: NormalButton[];
  public buttonAdd: NormalButton;
  public isPagination: boolean;
  public paginationButton: NotNamedButton;
  public data: TableAnnounceProps;

  constructor(
    private message: NzMessageService,
    private hs: HomeService,
    private drawerService: NzDrawerService,
    private modalService: NzModalService) {
    this.searchText = '';
    this.isPagination = true;
    this.condition = defaultAnnounceData;

    this.buttonAdd = {
      name: '添加公告',
      type: 'button',
      callback: this.add
    };

    this.buttonProps = [
      {
        name: '删除公告',
        type: 'button',
        style: 'delete',
        callback: this.delete
      }
    ];

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { ...this.condition, [PAGE]: index });
      }
    };

  }

  ngOnInit(): void {
    this.setData(this.condition);
  }

  setData(data: any): void {
    this.hs.getAnnouncementList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count }: DefaultDataFormate): void {
    this.data = {
      list,
      count
    };
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    this.condition = { ...pager };
    this.setData(this.condition);
    this.setSearchText(text);
    return true;
  }

  updateDrawer(item: any): void {
    const drawerRef = this.drawerService.create<AnnounceUpdateComponent, { data: any }, string>({
      nzTitle: '修改最新通知',
      nzWidth: '50%',
      nzContent: AnnounceUpdateComponent,
      nzContentParams: {
        data: item
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      if (data) {
        this.setData(page);
      }
    });
  }

  add = (item: any): void => {
    const drawerRef = this.drawerService.create<AnnounceAddComponent, { data: any }, boolean>({
      nzTitle: '新增公告',
      nzWidth: '50%',
      nzContent: AnnounceAddComponent,
      nzContentParams: {
        data: item
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      if (data) {
        this.setData(page);
      }
    });
  }

  close(): void {
    this.drawerTemplate.close();
  }

  delete = ({ title, id }: any): void => {
    showConfirm(`要删除公告${title}吗`, `这将无法恢复，您需要重新添加`, this.modalService, async () => {
      this.hs.deleteAnnouncement({ id }).subscribe(res => {
        if (res) {
          this.setData(this.condition);
          this.message.success(`删除公告：${title}成功`);
        }
      });
    });
  }
}
