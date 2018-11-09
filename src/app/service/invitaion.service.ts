import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';
import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const { sysInv } = Config.apis;
const console = new Log('InvitationService');

@Injectable()
export class InvitationService {


    constructor(private http: HttpService) { }

    async getList(data: any) {
        const res = await this.http.req('post', sysInv, data);
        return res.data;
    }
}
