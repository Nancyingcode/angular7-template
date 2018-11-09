import { Component, Injectable, OnInit } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
import { AccountService } from '../../../../service/account.service';

const console = new Log('AccountWealComponent');

const { userM, account, accountI } = Config.userMana;


@Component({
    selector: 'app-account-recharge',
    templateUrl: './account.recharge.html',
    styleUrls: ['./account.recharge.less']
})

@Injectable()
export class AccountRechargeComponent implements OnInit {
    public buttons = [{
        name: '修改',
        callback: function () { }
    }];
    public data = undefined;

    constructor(private as: AccountService) { }

    ngOnInit() { }

    async getData() {
        const data = await this.as.getRechargeList();
        return data.content;
    }

    async setData() {
        const data = await this.getData();
        this.data = [['账号', '币种信息', '数量', '时间', 'Hash(哈希值)'], ['usr', 'eth', 'aece', 'nitg', 'aitg'], data];
    }
}

