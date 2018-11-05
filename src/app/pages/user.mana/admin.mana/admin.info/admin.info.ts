import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../../config/config';
const { adminU, adminA, adminD } = Config.userMana;

@Component({
    selector: 'app-admin-info',
    templateUrl: './admin.info.html',
    styleUrls: ['./admin.info.less']
})

@Injectable()
export class AdminInfoComponent {

    public buttonTotal = '总人数';
    public img = '../../../../assets/pic/admin-mana-user.png';
    public buttonAdd = {
        name: '添加管理员'
    };
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
        router: adminU
    },
    {
        name: '删除',
        router: adminD
    }];
    constructor(private router: Router) { }

    update() {
        this.router.navigate([adminU]);
    }

    delete() {
        this.router.navigate([adminU]);
    }

    add() {
        this.router.navigate([adminA]);
    }
}
