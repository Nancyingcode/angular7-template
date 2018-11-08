import { Component, Injectable, OnInit } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';

const console = new Log('AccountWealComponent');

const { userM, account, accountI } = Config.userMana;


@Component({
    selector: 'app-account-recharge',
    templateUrl: './account.recharge.html',
    styleUrls: ['./account.recharge.less']
})

@Injectable()
export class AccountRechargeComponent implements OnInit {
    public table = [
        ['账号', '币种信息', '数量', '时间', 'Hash(哈希值)'],
        ['usr', 'eth', 'aece', 'nitg', 'aitg'], [{
            usr: 'asda',
            eth: 'dsad',
            aece: 'asda',
            nitg: 'dsad',
            aitg: 'sad'
        }, {
            usr: 'asda',
            eth: 'dsad',
            aece: 'asda',
            nitg: 'dsad',
            aitg: 'sad'
        }, {
            usr: 'asda',
            eth: 'dsad',
            aece: 'asda',
            nitg: 'dsad',
            aitg: 'sad'
        }]];
    public buttons = [{
        name: '修改',
        callback: function () { }
    }];
    ngOnInit() { }
}

