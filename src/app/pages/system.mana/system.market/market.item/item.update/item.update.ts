import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../../../config/config';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Log } from '../../../../../tools/console';
import * as _ from 'lodash';
const console = new Log('ItemUpdateComponent');

@Component({
    selector: 'app-item-update',
    templateUrl: './item.update.html',
    styleUrls: ['./item.update.less']
})

export class ItemUpdateComponent {
    public props = {
        alert: ['商城管理', '产品列表', '修改产品信息'],
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
            type: 'text',
            placeholder: 'Username',
            clz: 'form-control ',
            readonly: false,
            name: 'userName',
            rt: '用户名可用',
            wt: '用户名格式不正确'
        }, {
            title: '产品名称',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'password',
            rt: '',
            wt: '密码格式不正确'
        }, {
            title: '产品图片',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '密码不匹配'
        },
        {
            title: '产品价值',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '密码不匹配'
        },
        {
            title: '材质',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '密码不匹配'
        },
        {
            title: '产状',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '密码不匹配'
        },
        {
            title: '颜色',
            type: 'text',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '密码不匹配'
        }];
    public itemUpdateForm = this.fb.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
        repassword: ['', Validators.required],
        userNames: ['', Validators.required],
        passwords: ['', Validators.required],
        repasswords: ['', Validators.required],
        s: ['', Validators.required],
    });

    public state = {};

    constructor(private router: Router, private fb: FormBuilder) { }

    go(router: Router, url: string) {
        router.navigate([url]);
    }

    submit() {
        console.logger(this.itemUpdateForm.value.password);
    }

    back() { }

    validate(values: any) {
        const arr = Object.keys(values);
        values.map(function (item) {
            if (_.isEmpty(item)) { }
        });
    }
    onBlur() { }
}
