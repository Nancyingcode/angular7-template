import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../../config/config';

@Component({
    selector: 'app-account-info',
    templateUrl: './account.info.html',
    styleUrls: ['./account.info.less']
})

@Injectable()
export class AccountInfoComponent implements OnInit {
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

    constructor(private router: Router) { }

    ngOnInit() {
        this.setDefault();
    }

    setDefault() {
        this.router.navigate([Config.routerList.actMana]);
    }
}
