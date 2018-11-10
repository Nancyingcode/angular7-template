import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../../../config/config';
import { Router } from '@angular/router';
import { Log } from '../../../../../tools/console';
import * as _ from 'lodash';
import { MarketService } from 'src/app/service/market.service';
const console = new Log('OrderDetailComponent');
const { upload } = Config.apis;
const { page } = Config;

@Component({
    selector: 'app-roder-detail',
    templateUrl: './order.detail.html',
    styleUrls: ['./order.detail.less']
})

export class OrderDetailComponent implements OnInit {
    public data: any[] = undefined;
    public previewImage = '';
    public previewVisible = false;
    public preImageApi = upload;
    public props = {
        alert: ['商城管理', '商城管理', '购买记录'],
        callback: this.go
    };

    public state = {};

    constructor(private router: Router, private ms: MarketService) { }

    ngOnInit() {
        this.setData(page);
    }

    async getData(pager: any) {
        return await this.ms.getOrders(pager);
    }

    async setData(pager: any) {
        const data = await this.getData(pager);
        this.data = [
            ['id', 'name', 'time', 'author'],
            data
        ];
    }

    go(router: Router, url: string) {
        router.navigate([url]);
    }
}
