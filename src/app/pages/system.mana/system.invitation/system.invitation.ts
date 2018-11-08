import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../config/config';
const { admin, account } = Config.userMana;

@Component({
    selector: 'app-system-invitation',
    templateUrl: './system.invitation.html',
    styleUrls: ['./system.invitation.less']
})

export class SystemInvitationComponent {
    public list = [
        {
            name: '管理员管理',
            url: admin
        },
        {
            name: '账号管理',
            url: account
        }];
}
