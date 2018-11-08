import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../config/config';
const { admin, account } = Config.userMana;

@Component({
    selector: 'app-system-invitation',
    templateUrl: './system.invitation.html',
    styleUrls: ['./system.invitation.less']
})

export class SystemInvitationComponent {
    public data: any[] = [
        ['账户', '我的邀请码', '邀请的人'],
        ['id', 'code', 'inv'],
        [{
            id: 1,
            code: 'nancying1',
            inv: 'baoan',
        }, {
            id: 2,
            code: 'nancying2',
            inv: 'baoan',
        }, {
            id: 3,
            code: 'nancying3',
            inv: 'baoan',
        }]
    ];
    // public buttonauthors = [{
    //     name: '修改',
    //     router: ''
    // }, {
    //     name: '下架',
    //     router: ''
    // }];
}
