import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDrawerService, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { AccountCheckDrawData, AccountCheckRechargeData } from 'src/app/http';
import { AccountService } from '../service';
import {
  dropDown, showConfirm,
  Config,
  DefaultDataFormate, Log, NormalButton,
  NotNamedButton, TableProps
} from './index';
import { AccountCheckDetailComponent } from './template/detail';
const { defaultCheckData, page } = Config;
const console = new Log('AccountCheckComponent');

@Component({
  selector: 'app-account-check',
  templateUrl: './account.check.html',
  styleUrls: ['./account.check.less']
})

export class AccountCheckComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;
  private searchText: string;
  private condition: any;
  private selectedValue: string;
  public dropDown: any;
  public isPagination: boolean;
  public data: TableProps;
  public buttonProps: NormalButton[];
  public searchButton: NotNamedButton;
  public paginationButton: NotNamedButton;

  constructor(
    private as: AccountService,
    private message: NzMessageService,
    private drawerService: NzDrawerService,
    private modalService: NzModalService) {
    this.searchText = '';
    this.isPagination = true;
    this.dropDown = dropDown;
    this.condition = defaultCheckData;

    this.searchButton = {
      placeholder: '请输入手机号',
      callback: (text: string) => {
        this.search(text, page);
      }
    };

    this.buttonProps = [
      {
        name: '审核图片',
        type: 'button',
        style: 'info',
        callback: this.detailDrawer
      },
      {
        name: '通过',
        type: 'button',
        style: 'success',
        callback: (item) => {
          // this.detail(item);
        }
      },
      {
        name: '驳回',
        type: 'button',
        style: 'delete',
        callback: (item) => {
          // this.detail(item);
        }
      }
    ];

    this.paginationButton = {
      callback: (index: number) => {
        this.search(this.searchText, { ...this.condition, page: index });
      }
    };
  }

  ngOnInit(): void {
    try {
      this.select(1);
    } catch (e) {
      // this.message.error('服务器异常，请重试');
    }
  }

  setData(data: any): void {
    this.as.getCheckList(data).subscribe(res => this.patchValue(res));
  }

  patchValue({ list, count, type }: DefaultDataFormate): void {
    switch (type.toString()) {
      // 提现
      case '1': {
        this.buttonProps = [
          {
            name: '审核图片',
            type: 'button',
            style: 'info',
            callback: this.detailDrawer
          },
          {
            name: '通过',
            type: 'button',
            style: 'success',
            callback: this.acceptDraw
          },
          {
            name: '驳回',
            type: 'button',
            style: 'delete',
            callback: this.refuseDraw
          }
        ];

        this.data = {
          title: ['手机号', '姓名', '开户行', '开户支行', '银行卡号', '提现金额', '提现手续费', '总费用', '时间'],
          column: ['phone', 'name', 'bank', 'openBank', 'bankCard', 'number', 'fee', 'total', 'createTime'],
          list,
          count
        };

        break;
      }

      //  充值
      case '0': {
        this.buttonProps = [
          {
            name: '审核图片',
            type: 'button',
            style: 'info',
            callback: this.detailDrawer
          },
          {
            name: '通过',
            type: 'button',
            style: 'success',
            callback: this.acceptRecharge
          },
          {
            name: '驳回',
            type: 'button',
            style: 'delete',
            callback: this.refuseRecharge
          }
        ];

        this.data = {
          title: ['手机号', '姓名', '充值金额', '时间'],
          column: ['phone', 'name', 'number', 'createTime'],
          list,
          count
        };

        break;
      }
    }
  }

  setSearchText(searchText: string): void { this.searchText = searchText; }

  search = (text: string, pager?: any): boolean => {
    this.condition = { ...pager, phone: text };
    this.setData(this.condition);
    this.setSearchText(text);
    return true;
  }

  select = (value: number): void => {
    this.setData({ ...this.condition, type: value });
  }

  acceptDraw = ({ orderId, phone }: AccountCheckDrawData) => {
    showConfirm(`通过`, `要通过用户${phone}提现吗`, this.modalService, async () => {
      this.as.checkDraw({ orderId, status: 2 }).subscribe(res => {
        if (res) {
          this.message.success('通过提现成功');
          this.select(1);
        }
      });
    });
  }

  acceptRecharge = ({ orderId, phone }: AccountCheckDrawData) => {
    showConfirm(`通过`, `要通过用户${phone}提现吗`, this.modalService, async () => {
      this.as.checkRecharge({ orderId, status: 2 }).subscribe(res => {
        if (res) {
          this.message.success('通过充值成功');
          this.select(0);
        }
      });
    });
  }

  refuseDraw = ({ orderId, phone }: AccountCheckRechargeData) => {
    showConfirm(`拒绝`, `要拒绝用户${phone}提现吗`, this.modalService, async () => {
      this.as.checkDraw({ orderId, status: 3 }).subscribe(res => {
        if (res) {
          this.message.success('拒绝提现成功');
          this.select(1);
        }
      });
    });
  }

  refuseRecharge = ({ orderId, phone }: AccountCheckRechargeData) => {
    showConfirm(`拒绝`, `要拒绝用户${phone}充值吗`, this.modalService, async () => {
      this.as.checkRecharge({ orderId, status: 3 }).subscribe(res => {
        if (res) {
          this.message.success('拒绝充值成功');
          this.select(0);
        }
      });
    });
  }

  detailDrawer = (item: any): void => {
    const drawerRef = this.drawerService.create<AccountCheckDetailComponent, { img: any }, string>({
      nzTitle: '审核图',
      nzWidth: 'auto',
      nzContent: AccountCheckDetailComponent,
      nzContentParams: {
        img: item.voucherAddress
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
}
