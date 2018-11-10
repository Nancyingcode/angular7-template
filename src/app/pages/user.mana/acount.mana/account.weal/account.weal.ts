import { Component, Injectable, OnInit } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
import { ActionSequence } from 'protractor';
import { AccountService } from '../../../../service/account.service';
import { Router } from '@angular/router';

const console = new Log('AccountWealComponent');
const { page } = Config;

const { userM, account, accountI, accountWU } = Config.userMana;


@Component({
    selector: 'app-account-weal',
    templateUrl: './account.weal.html',
    styleUrls: ['./account.weal.less']
})

@Injectable()
export class AccountWealComponent implements OnInit {
    public buttons = [{
        name: '修改',
        callback: this.update
    }];

    public searchButton = {
        callback: this.search
    };
    public data = undefined;

    constructor(private as: AccountService) { }

    ngOnInit() {
        this.setData();
    }

    async getData() {
        const data = await this.as.getWealList(page);
        return data.content;
    }

    async setData() {
        const data = await this.getData();
        this.data = [
            ['账号', 'ETH数量', 'AECE数量', '普通积分数量', '可兑换积分数量'],
            ['account', 'eth', 'aece', 'normalPoints', 'exchangePoints'],
            data];
    }


    async search(text: string, server: AccountService) {
        page.account = text;
        const data = await server.getWealList(page);
        this.data[2] = data;
    }

    update(item: any, router: Router) {
        router.navigate([accountWU, item.account]);
    }
}
