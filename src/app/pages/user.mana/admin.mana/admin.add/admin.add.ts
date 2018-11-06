import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public alert = ['管理员管理', '添加管理员'];
    public list = [
        {
            title: '用户名',
            type: 'text',
            placeholder: 'Username',
            clz: 'form-control ',
            readonly: false,
            rt: '',
            wt: '用户名格式不正确'
        }, {
            title: '密码',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            rt: '',
            wt: '密码格式不正确'
        }, {
            title: '确定',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            rt: '',
            wt: '密码不匹配'
        }];
    constructor(private router: Router) { }

    ngOnInit() {
        console.log(location.pathname);
    }

    setDefault() {

    }
}
