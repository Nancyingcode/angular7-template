import { Component, Injectable, OnInit } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
import { ActionSequence } from 'protractor';
import { AccountService } from '../../../../service/account.service';

const console = new Log('AccountWealComponent');

const { userM, account, accountI } = Config.userMana;


@Component({
    selector: 'app-account-weal',
    templateUrl: './account.weal.html',
    styleUrls: ['./account.weal.less']
})

@Injectable()
export class AccountWealComponent implements OnInit {
    public buttons = [{
        name: '修改',
        callback: function () { }
    }];
    public data = undefined;

    constructor(private as: AccountService) { }

    ngOnInit() {
        this.setData();
    }

    async getData() {
        const data = await this.as.getWealList();
        return data.content;
    }

    async setData() {
        const data = await this.getData();
        this.data = [
            ['账号', 'ETH数量', 'AECE数量', '普通积分数量', '可兑换积分数量'],
            ['usr', 'eth', 'aece', 'nitg', 'aitg'],
            data];
    }
}

