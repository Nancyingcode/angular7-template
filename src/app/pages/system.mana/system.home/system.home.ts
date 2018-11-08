import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../config/config';
const { admin, account } = Config.userMana;

@Component({
    selector: 'app-system-home',
    templateUrl: './system.home.html',
    styleUrls: ['./system.home.less']
})

export class SystemHomeComponent {
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
