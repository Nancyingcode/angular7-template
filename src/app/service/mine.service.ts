
import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';
import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const { sysMine } = Config.apis;
const console = new Log('MinetService ');

@Injectable()
export class MineService {


    constructor(private http: HttpService) { }

    async getVersionInfo(data: any) {
        const res = await this.http.req('post', sysMine, data);
        return res.data;
    }

    async updateVersionInfo(data: any) {
        return await this.http.req('post', sysMine, data);
    }
}
