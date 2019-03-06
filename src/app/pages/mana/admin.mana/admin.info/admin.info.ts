import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { AdminDeleteData, LoginService, NotNamedButton, TableProps } from '../admin.add';
import {
  adminLevel,
  showConfirm,
  AdminService,
  Config,
  DefaultDataFormate,
  Log,
  NormalButton,
  PAGE
} from './index';

import { AdminAddComponent } from '../admin.add/admin.add';
import { AdminUpdataComponent } from '../admin.update/admin.update';

const {
  defaultAdminData,
  page,
  pageSize
} = Config;
const console = new Log('AdminInfoComponent');

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin.info.html',
  styleUrls: ['./admin.info.less']
})

export class AdminInfoComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  public isPagination: boolean;
  public isLoading: boolean;
  public buttonAdd: NormalButton;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;
  public filter: (text: string, column: string) => void;

  constructor(
    private router: Router,
    private as: AdminService,
    private drawerService: NzDrawerService,
    private modalService: NzModalService,
    private ls: LoginService,
    private message: NzMessageService) {
    this.searchText = '';
    this.isLoading = false;
    this.isPagination = true;
    this.condition = defaultAdminData;
    this.data = {
      title : [],
      column: [],
      list  : [],
      count : 0
    };

    this.buttonAdd = {
      name: '添加管理员',
      type: 'button',
      callback: () => {
        this.add();
      }
    };

    this.buttonProps = [
      {
        name: '修改',
        type: 'button',
        style: 'default',
        callback: this.update
      },
      {
        name: '删除',
        type: 'button',
        style: 'delete',
        callback: (item: any) => {
          this.delete(item);
        }
      }
    ];

    this.searchButton = {
      callback: (text: string) => {
        this.search(text, { ...this.condition });
      }
    };

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { ...this.condition, [PAGE]: index });
      }
    };

    this.filter = (text: string, column: string) => {
      this.search(text, { ...this.condition, [column]: text });
    };
  }

  ngOnInit(): void {
    try {
      this.setData(this.condition);
    } catch (e) {
      this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    const adminId = this.ls.getAdminId();
    this.as.getList(data).subscribe(res => {
      res.list.map(item => {
        if (item.id === adminId) {
          item.buttonProps = [];
        }
      });

      this.patchValue(res);
    });
  }

  patchValue( { list, count }: DefaultDataFormate ): void {
    this.data = {
      title : ['账号', '密码', '类型', '最后登录时间', '操作'],
      column: ['account', 'password', 'typeStr', 'lastLoginTime'],
      filters: ['account'],
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

  delete = ({ id, account }: AdminDeleteData) => {
    showConfirm(`要删除管理员${account}吗`, `这将无法恢复，您需要重新添加`, this.modalService, async () => {
      this.as.deleteManager({ id }).subscribe(res => {
        if (res) {
          this.setData(this.condition);
          this.message.success('删除成功');
          return;
        }

        this.message.error('删除失败');
      });
    });
  }

  update = (item: any): void => {
    const drawerRef = this.drawerService.create<AdminUpdataComponent, { item: any }, boolean>({
      nzTitle: `修改员工`,
      nzWidth: '80%',
      nzContent: AdminUpdataComponent,
      nzContentParams: { item }
    });

    drawerRef.afterOpen.subscribe(() => {

    });

    drawerRef.afterClose.subscribe(data => {
      if (data) {
        this.setData(this.condition);
      }
    });
  }

  add = (): void => {
    const drawerRef = this.drawerService.create<AdminAddComponent, { item: any }, boolean>({
      nzTitle: `添加员工`,
      nzWidth: '80%',
      nzContent: AdminAddComponent,
      nzContentParams: { item: '' }
    });

    drawerRef.afterOpen.subscribe(() => {

    });

    drawerRef.afterClose.subscribe(data => {
      if (data) {
        this.setData(this.condition);
      }
    });
  }

  close(): void {
    this.drawerTemplate.close();
  }
}
