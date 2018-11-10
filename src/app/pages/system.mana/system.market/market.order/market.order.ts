import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../../config/config';
import { MarketService } from 'src/app/service/market.service';
import { Router } from '@angular/router';
const { marketOD } = Config.sysMana;

@Component({
    selector: 'app-market-order',
    templateUrl: './market.order.html',
    styleUrls: ['./market.order.less']
})

export class MarketOrderComponent implements OnInit {
    public data: any[] = [
        ['单号', '产品名称', '购买时间', '查看详情'],
        ['id', 'name', 'time'],
        [{
            id: 1,
            name: 'nancying1',
            time: 'baoan',
        }, {
            id: 2,
            name: 'nancying2',
            time: 'baoan',
        }, {
            id: 3,
            name: 'nancying3',
            time: 'baoan',
        }]
    ];
    public buttonProps = [{
        name: '查看详情',
        callback: this.detail
    }];

    ngOnInit() {
        this.setData({});
    }

    constructor(private ms: MarketService) { }

    async getData(pager: any) {
        return await this.ms.getOrders(pager);
    }

    async setData(pager: any) {
        const data = await this.getData(pager);
        this.data = [
            ['单号', '产品名称', '购买时间'],
            ['id', 'name', 'time', 'author'],
            data
        ];
    }

    detail(item: any, router: Router) {
        router.navigate([marketOD]);
    }
}
