import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';

import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const { accountInfo, accountDraw, accountRecharge, accountWeal } = Config.apis;
const console = new Log('AccountService');

@Injectable()
export class AccountService {


    constructor(private http: HttpService) { }

    async getInfoList() {
        const res = await this.http.req('post', accountInfo, {
            likeAccount: '42',
            page: '1',
            pageSize: '10'
        });
        console.log(res.data);
        return res.data;
    }

    async getDrawList() {
        const res = await this.http.req('post', accountDraw, '');
        return res.data;
    }

    async getRechargeList() {
        const res = await this.http.req('post', accountRecharge, '');
        return res.data;
    }

    async getWealList() {
        const res = await this.http.req('post', accountWeal, '');
        return res.data;
    }
}
