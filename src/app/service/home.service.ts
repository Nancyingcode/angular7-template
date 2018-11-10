import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';
import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const { sysHome, homeCarousel, homePost, carouselU, postU } = Config.apis;
const console = new Log('HomeService');

@Injectable()
export class HomeService {


    constructor(private http: HttpService) { }

    async getCarousels() {
        const res = await this.http.req('post', sysHome, '');
        return res.data;
    }

    async getPost(data: any) {
        return await this.http.req('post', homePost, '');
    }

    async updateCarousel(managerId: number) {
        return await this.http.req('post', carouselU, '');
    }
}