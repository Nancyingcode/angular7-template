import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../../../config/config';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { Log } from '../../../../../tools/console';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import * as _ from 'lodash';
import { MarketService } from 'src/app/service/market.service';
import { AccountService } from 'src/app/service/account.service';
import { checkReq } from 'src/app/tools/tools';
const console = new Log('ItemUpdateComponent');
const { accountW } = Config.userMana;

@Component({
    selector: 'app-weal-update',
    templateUrl: './weal.update.html',
    styleUrls: ['./weal.update.less']
})

export class WealUpdateComponent implements OnInit {
    public props = {
        alert: ['账户管理', '账户资产管理'],
        callback: this.go
    };

    public buttons = [
        {
            name: '确定',
            type: 'submit',
            callback: function () { }
        }, {
            name: '返回',
            type: 'button',
            callback: this.back
        }];
    public list = [
        {
            title: '账号',
            type: 'text',
            placeholder: '材质',
            clz: 'form-control',
            readonly: true,
            name: 'account',
            rt: '',
            wt: ''
        },
        {
            title: 'ETH数量',
            type: 'number',
            placeholder: '产品编号',
            clz: 'form-control ',
            readonly: false,
            name: 'eth',
            rt: '用户名可用',
            wt: '请输入ETH数量'
        }, {
            title: 'AECE数量',
            type: 'text',
            placeholder: '产品名称',
            clz: 'form-control',
            readonly: false,
            name: 'aece',
            rt: '',
            wt: '请输入AECE数量'
        }, {
            title: '普通积分数量',
            type: 'number',
            placeholder: '',
            clz: 'form-control',
            readonly: true,
            name: 'normalPoints',
            rt: '',
            wt: '请输入普通积分数量'
        },
        {
            title: '可兑换积分数量',
            type: 'number',
            placeholder: '可兑换数量',
            clz: 'form-control',
            readonly: true,
            name: 'exchangePoints',
            rt: '',
            wt: '请输入可兑换积分数量'
        },
    ];
    public fileList = [
        {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
    ];
    public isLoad = false;
    public previewImage = '';
    public previewVisible = false;
    public detail: any;
    public itemUpdateForm = this.fb.group({
        account: [''],
        eth: ['', Validators.required],
        aece: ['', Validators.required],
        normalPoints: ['', Validators.required],
        exchangePoints: [' ', Validators.required]
    });

    public state = {};

    constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder
        , private msg: NzMessageService, private ms: MarketService, private as: AccountService) { }

    go(router: Router, url: string) {
        router.navigate([url]);
    }

    async ngOnInit() {
        await this.setForm();
        this.isLoad = true;
    }

    async submit() {
        if (this.itemUpdateForm.status === '') { return; }
        const res = await this.updateItem();
        if (checkReq(res)) { this.router.navigate([accountW]); }
        return;
    }

    async updateItem() {
        const data = this.itemUpdateForm.value;
        const res = await this.as.updateWeal(data);
        return res;
    }

    async getDetail() {
        const res = await this.as.getWealDetail({ account: this.getAccount() });
        return res.data;
    }

    async setForm() {
        const res = await this.getDetail();
        this.itemUpdateForm.patchValue({
            account: res.account,
            eth: res.eth,
            aece: res.aece,
            normalPoints: res.normalPoints,
            exchangePoints: res.exchangePoints
        });
    }

    back(router: Router) {
        router.navigate(['../']);
    }

    getAccount() {
        return this.route.snapshot.paramMap.get('account');
    }

    validate(values: any) {
        const arr = Object.keys(values);
        values.map(function (item) {
            if (_.isEmpty(item)) { }
        });
    }

    handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }

    onBlur() { }

    async getData() {
        return await this.route.paramMap.toPromise();
    }
}
