import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from '../../../config/config';

const { userM, account, accountI, accountW, accountR, accountD } = Config.userMana;


@Component({
    selector: 'app-account-mana',
    templateUrl: './account.mana.html',
    styleUrls: ['./account.mana.less']
})

@Injectable()
export class AccountManaComponent implements OnInit {
    public props = [{
        value: '帐号信息管理',
        router: accountI,
        callback: this.go
    }, {
        value: '帐号资产管理',
        router: accountW,
        callback: this.go
    }, {
        value: '冲币记录管理',
        router: accountR,
        callback: this.go
    }, {
        value: '提币记录管理',
        router: accountD,
        callback: this.go
    }];
    constructor(private router: Router) { }

    ngOnInit() {
        this.setDefault();
    }

    setDefault() {
        this.router.navigate([accountI]);
    }

    go(router: Router, url: string) {
        router.navigate([url]);
    }
}
