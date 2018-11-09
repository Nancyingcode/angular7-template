import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../config/config';
import { Log } from '../../../tools/console';
import { AccountService } from '../../../service/account.service';
import { Router } from '@angular/router';
import { InvitationService } from '../../../service/invitaion.service';
const { accountU } = Config.userMana;
const console = new Log('SystemInvitationComponent');
const { admin, account } = Config.userMana;

@Component({
    selector: 'app-system-invitation',
    templateUrl: './system.invitation.html',
    styleUrls: ['./system.invitation.less']
})

export class SystemInvitationComponent {

    public data: any[] = undefined;
    constructor(private router: Router, private is: InvitationService) { }

    async ngOnInit() {
        await this.setData({});
    }

    ngOnChanges() { }


    async getData(data: any) {
        const res = await this.is.getList(data);
        console.logger('geData', JSON.stringify(res.content));
        return res.content;
    }

    async setData(pager: any) {
        const data = await this.getData(pager);
        this.data = [
            ['账户', '我的邀请码', '邀请的人'],
            ['id', 'code', 'inv'],
            data
        ];
    }
}
