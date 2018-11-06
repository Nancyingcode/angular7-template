import { Component, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.less'],
    animations: []
})


export class LoginComponent {
    public jumper = '../../../assets/pic/login-jumper.png';
    public items = [
        {
            title: '账号:',
            placeholder: '',
            type: 'text',
            label: '用户名',
            name: 'userName'
        },
        {
            title: '密码:',
            placeholder: '',
            type: 'password',
            label: '密码',
            name: 'password'
        }
    ];
    loginForm = this.fb.group({
        userName: [''],
        password: [''],
    });
    public loginBtn = '登录';
    public title = '后台管理页面';
    constructor(private fb: FormBuilder) { }

    submit() { }
}
