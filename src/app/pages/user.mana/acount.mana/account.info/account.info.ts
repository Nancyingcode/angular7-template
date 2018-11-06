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

    public data: any[] = [
        ['账号', '密码', '最后登录时间', '管理员属性', '操作'],
        ['id', 'name', 'addr', 'prop'],
        [{
            id: 1,
            name: 'nancying1',
            addr: 'baoan',
            prop: '超级管理员'
        }, {
            id: 2,
            name: 'nancying2',
            addr: 'baoan',
            prop: '超级管理员'
        }, {
            id: 3,
            name: 'nancying3',
            addr: 'baoan',
            prop: '超级管理员'
        }]
    ];
    public buttonProps = [{
        name: '修改',
        router: ''
    }];
    constructor(private router: Router) { }

    ngOnInit() {
        // this.setDefault();
    }

    setDefault() {
        // this.router.navigate([Config.routerList.actMana]);
    }
}