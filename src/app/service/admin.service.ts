import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';

import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const { adminInfo, adminAdd, adminDelete, adminUpdate } = Config.apis;
const console = new Log('admin');

@Injectable()
export class AdminService {


    constructor(private http: HttpService) { }

    async getList() {
        const res = await this.http.req('post', adminInfo, '');
        return res.data;
    }

    async addManager(data: any) {
        return await this.http.req('post', adminAdd, '');
    }

    async deleteManager(managerId: number) {
        return await this.http.req('post', adminDelete, '');
    }

    async updateManager(data: any) {
        return await this.http.req('post', adminUpdate, data);
    }
}
