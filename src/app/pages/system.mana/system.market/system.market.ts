import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../config/config';
import { Router } from '@angular/router';
const { marketL, marketO } = Config.sysMana;

@Component({
    selector: 'app-system-market',
    templateUrl: './system.market.html',
    styleUrls: ['./system.market.less']
})

export class SystemMarketComponent implements OnInit {
    public props = [{
        value: '产品列表',
        router: marketL,
        callback: this.go
    }, {
        value: '购买记录',
        router: marketO,
        callback: this.go
    }];

    constructor(private router: Router) { }

    ngOnInit() { this.router.navigate([marketL]); }

    setDefaultItem() { }

    go(router: Router, url: string) {
        router.navigate([url]);
    }
}
