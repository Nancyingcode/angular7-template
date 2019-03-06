import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { NzDrawerRef, NzMessageService, UploadFile } from 'ng-zorro-antd';
import { NormalButton, PointerButton } from 'src/app/interface/component';
import { AccountService } from '../../../../service/account.service';
import { FormGroupService, LoginService } from '../service';
import { checkForm, checkReq, checkUndirtyForm, wealUpdateList, Config, Log } from './index';
const console = new Log('WealUpdateComponent');
const { accountRelation, accountW, accountID } = Config.userMana;

@Component({
  selector: 'app-weal-update',
  templateUrl: './weal.update.html',
  styleUrls: ['./weal.update.less']
})

export class WealUpdateComponent implements OnInit {
  @Input() data: any;
  private userId: number;
  public props: PointerButton;
  public buttons: NormalButton[];
  public list: any[];
  public isLoading: boolean;
  public itemUpdateForm: FormGroup;
  public isUpdate: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private fgs: FormGroupService,
    private drawerRef: NzDrawerRef<boolean>,
    private message: NzMessageService,
    private as: AccountService,
    private ls: LoginService) {
    this.userId = 0;
    this.isLoading = false;
    this.isUpdate = false;
    this.props = {
      alert: ['用户列表', '用户个人资料', '用户资产修改'],
      callback: () => {
        this.back();
      }
    };

    this.buttons = [
      {
        name: '确定',
        type: 'submit',
        choose: 'loading',
        callback: () => { }
      },
      {
        name: '返回',
        type: 'button',
        style: 'default',
        callback: () => {
          this.close();
        }
      }
    ];

    this.itemUpdateForm = this.fgs.toRuleFormGroup(wealUpdateList);

    this.list = wealUpdateList;
  }

  async ngOnInit(): Promise<void> {
    await this.setForm();
  }

  async setForm(): Promise<void> {
    try {
      this.getParams();
    } catch (e) {
      this.message.error('服务器异常，请重试，如屡试无法操作,请联系开发者');
      this.back();
    }
  }

  getParams(): void {
    const { goldCoin, eth, wsbc } = this.data;
    this.itemUpdateForm.patchValue({ gold: goldCoin, eth, wsbc });
    this.userId = this.data.userId;
    // this.route.params.subscribe(item => {
    //   this.itemUpdateForm.patchValue({ ...item });
    //   this.userId = parseInt(item.id, 10);
    // });
  }

  async submit(): Promise<boolean> {
    const { itemUpdateForm } = this;
    if (!checkForm(itemUpdateForm)) {
      checkUndirtyForm(itemUpdateForm);
      this.message.error('请填写信息完全');
      return;
    }

    this.isLoading = true;
    const res = await this.updateItem();
    this.isLoading = false;
    if (checkReq(res)) {
      this.message.success('更新用户资产成功');
      this.isUpdate = true;
      this.close();
      return true;
    }

    return false;
  }

  async updateItem(): Promise<any> {
    const updateData = this.getUpdateData(this.itemUpdateForm);
    return await this.as.updateWeal(updateData);
  }

  getUpdateData({ value }: any): any {
    const adminId = this.ls.getAdminId();
    return { ...value, adminId, userId: this.userId };
  }

  back = () => {
    this.router.navigate([accountID, { userId: this.userId }]);
  }

  close(): void {
    this.drawerRef.close(this.isUpdate);
  }

}
