import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { FormGroupService, ReplyService } from '../../../login';
import {
  checkForm,
  checkReq,
  checkUndirtyForm,
  formDate,
  hasOwnProperty,
  levelList,
  replyItems,
  showConfirm,
  AccountService,
  Config,
  FormItem,
  Log,
  NormalButton,
  NotNamedButton,
  PointerButton,
  Reply
} from './index';

const console = new Log('ReplyDetailComponent');
const { defaultData, defaultReplyData, page, pageSize } = Config;
const { reply } = Config.userMana;

@Component({
  selector: 'app-reply-detail',
  templateUrl: './reply.detail.html',
  styleUrls: ['./reply.detail.less']
})

export class ReplyDetailComponent implements OnInit {
  private id: number;
  public buttonUpdate: NormalButton;
  public props: PointerButton;
  public buttons: NormalButton[];
  public formItem: FormItem[];
  public form: FormGroup;
  public isLoading: boolean;

  constructor(
    private message: NzMessageService,
    private rs: ReplyService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private fgs: FormGroupService,
    private modalService: NzModalService) {
    this.id = undefined;
    this.isLoading = false;
    this.formItem = replyItems;
    this.form = this.fgs.toFormGroup(replyItems);

    this.props = {
      alert: ['主页', '留言管理', '回复留言'],
      callback: () => {
        this.back();
      }
    };

    this.buttons = [
      {
        name: '确定',
        type: 'submit',
        choose: 'loading',
        hidden: false,
        callback: () => { }
      },
      {
        name: '返回',
        type: 'button',
        style: 'default',
        hidden: false,
        callback: () => {
          this.back();
        }
      }
    ];

    // this.buttonAdd = {
    //   name: '添加公告',
    //   type: 'button',
    //   callback: () => { }
    // };

    // this.buttonProps = [
    //   {
    //     name: '修改公告',
    //     type: 'button',
    //     style: 'default',
    //     callback: (item) => {
    //       // this.update(item);
    //     }
    //   },
    //   {
    //     name: '删除公告',
    //     type: 'button',
    //     style: 'delete',
    //     callback: (item) => {
    //       // this.delete(item);
    //     }
    //   }
    // ];
  }

  ngOnInit(): void {
    this.getParams();
  }

  getReplyData(): Reply {
    return { ...this.form.value, id: this.id };
  }

  submit(): void {
    const { form } = this;
    if (!checkForm(form)) {
      checkUndirtyForm(form);
      this.message.error('请填写信息完全');
      return;
    }

    this.isLoading = true;
    this.rs.responeReply(this.getReplyData())
    .subscribe(isReply => {
      if (isReply) {
        this.isLoading = false;
        this.back();
      }
    });

    return;
  }

  getParams(): void {
    this.route.params.subscribe(item => {
      this.form.patchValue({ ...item });
      this.id = item.id;

      if (!item.reply || item.reply !== 'null') {
        if (hasOwnProperty(this.buttons[0], 'hidden')) {
          this.buttons[0].hidden = true;
        }
      }
    });
  }

  back = () => {
    this.router.navigate([reply]);
  }
}
