import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import { NzDrawerRef, NzMessageService } from 'ng-zorro-antd';

import { AnnounceService, FormGroupService } from '../service';
import { announceUpdateItems, AnnounceUpdateData, Config, FormItem, Log, NormalButton, PointerButton } from './index';

const console = new Log('AnnounceUpdateComponent');

@Component({
  selector: 'app-announce-update',
  templateUrl: './announce-update.component.html',
  styleUrls: ['./announce-update.component.less']
})
export class AnnounceUpdateComponent implements OnInit {

  @Input() data: any;
  public buttonUpdate: NormalButton;
  public isLoading: boolean;
  public props: PointerButton;
  public FormItem: FormItem[];
  public form: FormGroup;

  constructor(
    private as: AnnounceService,
    private fgs: FormGroupService,
    private drawerRef: NzDrawerRef<boolean>,
    private message: NzMessageService) {

    this.buttonUpdate = {
      name: '确认更改',
      type: 'submit',
      choose: 'loading',
      callback: () => {
        console.log('update success');
      }
    };

    this.FormItem = announceUpdateItems;
    this.form = this.fgs.toFormGroup(announceUpdateItems);
  }

  ngOnInit(): void {
    this.patchValue();
  }

  patchValue(): void {
    this.form.patchValue(this.data);
  }

  getUpdateData(): AnnounceUpdateData {
    return { ...this.form.value, id: this.data.id };
  }

  update = (): boolean => {
    const data = this.getUpdateData();
    this.isLoading = true;
    this.as.updateAnnouncement(data).subscribe(res => {
      this.isLoading = false;
      if (res) {
        this.message.success('最新通知修改成功');
        this.close(true);
      }
    });

    return true;
  }

  close = (result?: boolean): void => {
    this.drawerRef.close(result);
  }

}
