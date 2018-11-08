import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';

import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const { adminInfo, adminAdd, adminDelete } = Config.apis;
const console = new Log('admin');
const loginApi = '/api/bgUserManager/bgLogin';
const reLoginApi = '';
const registrpApi = '';

@Injectable()
export class AdminService {


    constructor(private http: HttpService) { }

    async getList() {
        const res = await this.http.req('post', adminInfo, '');
        return res.data;
    }

    async addManager() {
        const res = await this.http.req('post', adminAdd, '');
    }

    async deleteManager() {
        const res = await this.http.req('post', adminAdd, '');
    }
}
