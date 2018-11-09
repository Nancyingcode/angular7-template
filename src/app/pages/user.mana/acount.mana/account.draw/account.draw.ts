import { Component, Injectable, OnInit } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
import { AccountService } from '../../../../service/account.service';

const console = new Log('AccountWealComponent');

const { userM, account, accountI } = Config.userMana;


@Component({
    selector: 'app-account-draw',
    templateUrl: './account.draw.html',
    styleUrls: ['./account.draw.less']
})

@Injectable()
export class AccountDrawComponent implements OnInit {
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
        this.data = [
            ['账号', '币种名称', '数量', '时间', '提币钱包地址'],
            ['usr', 'eth', 'aece', 'nitg', 'aitg'], data]
    }
}

