import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../../../config/config';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Log } from '../../../../../tools/console';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import * as _ from 'lodash';
import { MarketService } from 'src/app/service/market.service';
const console = new Log('ItemUpdateComponent');

@Component({
    selector: 'app-item-add',
    templateUrl: './item.add.html',
    styleUrls: ['./item.add.less']
})

export class ItemAddComponent {
    public previewImage = '';
    public previewVisible = false;
    public preImageApi = 'https://jsonplaceholder.typicode.com/posts/';
    public props = {
        alert: ['商城管理', '产品列表', '上架产品'],
        callback: this.go
    };

    public buttons = [
        {
            name: '提交',
            type: 'submit',
            callback: this.submit
        }, {
            name: '返回',
            type: 'button',
            callback: this.back
        }];
    public list = [
        {
            title: '产品编号',
            type: 'number',
            placeholder: '产品编号',
            clz: 'form-control ',
            readonly: false,
            name: 'userName',
            rt: '用户名可用',
            wt: '用户名格式不正确'
        }, {
            title: '产品名称',
            type: 'text',
            placeholder: '产品名称',
            clz: 'form-control',
            readonly: false,
            name: 'password',
            rt: '',
            wt: '请输入产品名称'
        }, {
            title: '产品图片',
            type: 'file',
            placeholder: '',
            clz: 'custom-file-input',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '图片必须提供'
        },
        {
            title: '产品价值',
            type: 'text',
            placeholder: '产品价值',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '请输入产品成本'
        },
        {
            title: '材质',
            type: 'text',
            placeholder: '材质',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '材质不能为空'
        },
        {
            title: '产状',
            type: 'text',
            placeholder: '产状',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '请输入产品状况'
        },
        {
            title: '颜色',
            type: 'text',
            placeholder: '颜色',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '请输入产品颜色'
        },
        {
            title: '重量',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: '重量',
            rt: '',
            wt: '请输入产品重量'
        },
        {
            title: '尺寸',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: '尺寸',
            rt: '',
            wt: '请输入产品尺寸'
        },
        {
            title: '购买所需价格',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: '价格',
            rt: '',
            wt: '请输入价格'
        },
        {
            title: '购买奖励积分',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: '奖励积分',
            rt: '',
            wt: '奖励积分'
        }];
    public fileList = [
        {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
    ];
    public itemAddForm = this.fb.group({
        userName: ['yonghum', Validators.required],
        password: ['', Validators.required],
        repassword: ['', Validators.required],
        userNames: ['', Validators.required],
        passwords: ['', Validators.required],
        repasswords: ['', Validators.required],
        s: ['', Validators.required],
    });

    public state = {};

    constructor(private router: Router, private fb: FormBuilder, private msg: NzMessageService, private ms: MarketService) { }

    go(router: Router, url: string) {
        router.navigate(['../']);
    }

    async submit() {
        if (this.itemAddForm.status === '') { return; }
        await this.updateItem();
    }

    back() { }

    async updateItem() {
        const data = this.itemAddForm.value;
        const res = await this.ms.updateItem(this.itemAddForm.value);
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
}
