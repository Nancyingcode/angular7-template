import { Component, Injectable, OnInit } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';

const console = new Log('AccountWealComponent');

const { userM, account, accountI } = Config.userMana;


@Component({
    selector: 'app-account-draw',
    templateUrl: './account.draw.html',
    styleUrls: ['./account.draw.less']
})

@Injectable()
export class AccountDrawComponent implements OnInit {
    public table = [
        ['账号', 'ETH数量', 'AECE数量', '普通积分数量', '可兑换积分数量'],
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

