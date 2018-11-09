import { Component, Injectable, Input, OnInit, TemplateRef, OnChanges } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
const console = new Log('MarketItemComponent');
const { marketL, marketU } = Config.sysMana;
import { Router } from '@angular/router';
import { MarketService } from '../../../../service/market.service';

@Component({
    selector: 'app-market-item',
    templateUrl: './market.item.html',
    styleUrls: ['./market.item.less']
})

export class MarketItemComponent implements OnInit {
    public data: any[] = undefined;
    public buttonProps = [{
        name: '修改',
        callback: this.update
    }, {
        name: '下架',
        callback: this.delete
    }];

    constructor(private ms: MarketService, private router: Router) { }

    ngOnInit() {
        console.logger(marketU);
        this.router.navigate([marketU]);
    }

    async getData(pager: any) {
        const res = await this.ms.getItems(pager);
        console.logger('geData', JSON.stringify(res.content));
        return res.content;
    }

    async setData(pager: any) {
        const data = await this.getData(pager);
        this.data = [
            ['产品编号', '产品名称', '上架时间', '发布人'],
            ['id', 'name', 'time', 'author'],
            data
        ];
    }

    async update(item: any, router: Router) {
        const res = await this.ms.updateItem(item);
        router.navigate([marketU]);
    }

    delete(item: any, router: Router) {
        router.navigate([marketL]);
    }
}
