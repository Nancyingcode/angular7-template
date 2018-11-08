import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../config/config';
const { admin, account } = Config.userMana;

@Component({
    selector: 'app-system-mine',
    templateUrl: './system.mine.html',
    styleUrls: ['./system.mine.less']
})

export class SystemMineComponent {
    public data: any[] = [
        ['版本', 'QQ', '客服电话', 'E-mail'],
        ['version', 'qq', 'phone', 'email'],
        [{
            version: 1,
            qq: 'nancying1',
            phone: 'baoan',
            email: '23414@sadads.com'
        }, {
            version: 2,
            qq: 'nancying2',
            phone: 'baoan',
            email: '23414@sadads.com'
        }, {
            version: 3,
            qq: 'nancying3',
            phone: 'baoan',
            email: '23414@sadads.com'
        }]
    ];

    public buttonProps = [{
        name: '修改',
        router: ''
    }, {
        name: '下架',
        router: ''
    }];
}
