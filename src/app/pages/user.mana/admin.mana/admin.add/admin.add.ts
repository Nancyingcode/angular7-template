import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
const console = new Log('AdminAddComponent');

@Component({
    selector: 'app-admin-add',
    templateUrl: './admin.add.html',
    styleUrls: ['./admin.add.less']
})

@Injectable()
export class AdminAddComponent implements OnInit {
    public props = {
        alert: ['管理员管理', '添加管理员'],
        callback: this.back
    };
    public buttons = [{
        name: '提交'
    }, {
        name: '返回'
    }];
    public list = [
        {
            title: '用户名',
            type: 'text',
            placeholder: 'Username',
            clz: 'form-control ',
            readonly: false,
            name: 'userName',
            rt: '',
            wt: '用户名格式不正确'
        }, {
            title: '密码',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'password',
            rt: '',
            wt: '密码格式不正确'
        }, {
            title: '确定',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'repassword',
            rt: '',
            wt: '密码不匹配'
        }];
    public adminAForm = this.fb.group({
        userName: [''],
        password: [''],
        repassword: ['']
    });
    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        console.log(location.pathname);
    }

    setDefault() {

    }

    back(router: Router) {
        router.navigate(['../']);
    }
    validate() { }

    submit() { }
}
