import { Component, Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';

// import { LoginService } from './service/login.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.less']
})


export class HomeComponent {
    public jumper = '../../../assets/pic/login-jumper.png';
    public items = [
        {
            title: '账号:',
            placeholder: '',
            type: 'text',
            label: '用户名'
        },
        {
            title: '密码:',
            placeholder: '',
            type: 'password',
            label: '密码'
        }
    ];
    public loginBtn = '登录';
    public title = '后台管理页面';
}