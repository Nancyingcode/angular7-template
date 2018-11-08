import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../../config/config';

@Component({
    selector: 'app-market-order',
    templateUrl: './market.order.html',
    styleUrls: ['./market.order.less']
})

export class MarketOrderComponent {
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
        router: ''
    }];
}
