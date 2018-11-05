import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../config/config';
@Component({
    selector: 'app-admin-mana',
    templateUrl: './admin.mana.html',
    styleUrls: ['./admin.mana.less']
})

@Injectable()
export class AdminManaComponent {
    public button = '总人数';
    public img = '../../../../assets/pic/admin-mana-user.png';
    public add = {
        value: '添加管理员'
    };
    public data: any[] = [
        ['ID', '姓名', '地址', '操作'], ['id', 'name', 'addr'], [{
            id: 1,
            name: 'nancying1',
            addr: 'baoan'
        }, {
            id: 2,
            name: 'nancying2',
            addr: 'baoan'
        }, {
            id: 3,
            name: 'nancying3',
            addr: 'baoan'
        }]
    ];
    constructor() { }
}
