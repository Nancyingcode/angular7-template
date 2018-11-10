import { Component, Injectable, Input, OnInit, TemplateRef, OnChanges } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
import { checkReq } from '../../../../tools/tools';
const console = new Log('MarketItemComponent');
const { marketL, marketU } = Config.sysMana;
const { page } = Config;
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

    async ngOnInit() {
        await this.setData(page);
        // this.router.navigate([marketL]);
    }

    async getData(pager: any) {
        const res = await this.ms.getItems(pager);
        console.logger('geData', JSON.stringify(res.content));
        return res;
    }

    async setData(pager: any) {
        const data = await this.getData(pager);
        this.data = [
            ['产品编号', '产品名称', 'AECE单价', '上架状态'],
            ['goodsNo', 'goodsName', 'goodsAecePrice', 'goodsStatus'],
            data
        ];
    }

    async update(item: any, router: Router) {
        const res = await this.ms.updateItem(item);
        router.navigate([marketU]);
    }

    async delete(item: any, router: Router) {
        const res = await this.ms.unsetItem(item);
        if (checkReq(res)) { await this.setData(page); }
        return;
    }
}
