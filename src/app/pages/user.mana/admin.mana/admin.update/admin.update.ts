import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Config } from '../../../../config/config';
import { AdminService } from 'src/app/service/admin.service';

@Component({
    selector: 'app-admin-update',
    templateUrl: './admin.update.html',
    styleUrls: ['./admin.update.less']
})

@Injectable()
export class AdminUpdataComponent implements OnInit {

    public alert = ['管理员管理', '添加管理员'];
    public buttons = [{
        name: '提交',
        callback: this.update
    }, {
        name: '返回',
        callback: function (item: any, router: Router) {
            router.navigate(['../']);
        }
    }];
    public list = [
        {
            title: '账户',
            type: 'text',
            placeholder: 'Username',
            clz: 'form-control-plaintext ',
            readonly: true,
            name: 'usr',
            rt: '',
            wt: '用户名格式不正确'
        }, {
            title: '旧密码',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'opswd',
            rt: '',
            wt: '密码格式不正确'
        }, {
            title: '新密码',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'pswd',
            rt: '',
            wt: '密码格式不正确'
        }, {
            title: '确定',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'repswd',
            rt: '',
            wt: '密码不匹配'
        }];
    public adminUForm = this.fb.group({
        usr: [''],
        opswd: [''],
        pswd: [''],
        repswd: ['']
    });
    constructor(private router: Router, private fb: FormBuilder, private as: AdminService) { }

    ngOnInit() {
        console.log(location.pathname);
    }

    async update(item: any) {
        const { account, oldPwd, newPwd } = item;
        const data = { account, oldPwd, newPwd };
        return await this.as.updateManager(data);
    }
    setDefault() { }

    validate() { }

    submit() { }
}
