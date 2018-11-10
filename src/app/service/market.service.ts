
import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';
import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const { adminInfo, adminAdd, adminDelete, adminUpdate, sysMarketL } = Config.apis;
const console = new Log('MarketService');

@Injectable()
export class MarketService {


    constructor(private http: HttpService) { }

    async getItems(data: any) {
        const res = await this.http.req('post', sysMarketL, data);
        return res.data;
    }

    async getOrders(data: any) {
        return await this.http.req('post', adminAdd, data);
    }

    async updateItem(data: any) {
        return await this.http.req('post', adminDelete, data);
    }

    async unsetItem(data: any) {
        const res = await this.http.req('post', adminUpdate, data);
    }
}
