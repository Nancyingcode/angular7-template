import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';

import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const { accountInfo, accountDraw, accountRecharge, accountWeal, accountWealD, accountWealU } = Config.apis;
const { page } = Config;
const console = new Log('AccountService');

@Injectable()
export class AccountService {


    constructor(private http: HttpService) { }

    async getInfoList() {
        const data = Object.assign({
            likeAccount: '',
        }, page);
        const res = await this.http.req('post', accountInfo, data);
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

    async getWealList(data: any) {
        const res = await this.http.req('post', accountWeal, data);
        return res.data;
    }

    async getWealDetail(data) {
        const res = await this.http.req('post', accountWealD, data);
        return res;
    }

    async updateWeal(data) {
        const res = await this.http.req('post', accountWealU, data);
        return res;
    }

    async delete() {

    }
}
