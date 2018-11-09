import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
const console = new Log('MarketItemComponent');
const { marketL, marketU } = Config.sysMana;
import { Router } from '@angular/router';

@Component({
    selector: 'app-market-item',
    templateUrl: './market.item.html',
    styleUrls: ['./market.item.less']
})

export class MarketItemComponent {
    public data: any[] = [
        ['产品编号', '产品名称', '上架时间', '发布人'],
        ['id', 'name', 'time', 'author'],
        [{
            id: 1,
            name: 'nancying1',
            time: 'baoan',
            author: '超级管理员'
        }, {
            id: 2,
            name: 'nancying2',
            time: 'baoan',
            author: '超级管理员'
        }, {
            id: 3,
            name: 'nancying3',
            time: 'baoan',
            author: '超级管理员'
        }]
    ];
    public buttonProps = [{
        name: '修改',
        callback: this.update
    }, {
        name: '下架',
        callback: this.delete
    }];

    update(item: any, router: Router) {
        router.navigate([marketU]);
    }

    delete(item: any, router: Router) {
        router.navigate([marketL]);
    }
}
