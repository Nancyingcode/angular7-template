import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { NzDrawerRef, NzMessageService } from 'ng-zorro-antd';

import { AnnounceService, FormGroupService } from '../service';
import { announceItems, AnnounceAddData, FormItem, NormalButton, PointerButton } from './index';

@Component({
  selector: 'app-announce-add',
  templateUrl: './announce-add.component.html',
  styleUrls: ['./announce-add.component.less']
})

export class AnnounceAddComponent {

  public buttonAdd: NormalButton;
  public props: PointerButton;
  public FormItem: FormItem[];
  public form: FormGroup;

  constructor(
    private router: Router,
    private as: AnnounceService,
    private fgs: FormGroupService,
    private drawerRef: NzDrawerRef<boolean>,
    private message: NzMessageService) {
    this.buttonAdd = {
      name: '发布',
      type: 'button',
      callback: () => {
        this.submit();
      }
    };

    this.FormItem = announceItems;

    this.form = this.fgs.toFormGroup(announceItems);
  }

  getAddData(): AnnounceAddData {
    return { ...this.form.value };
  }

  submit = (): boolean => {
    const data = this.getAddData();
    this.as.addAnnouncement(data).subscribe(res => {
      if (res) {
        this.close(true);
        this.message.success('发布公告成功');
      }
    });

    return true;
  }

  close = (result?: boolean): void => {
    this.drawerRef.close(result);
  }

}
