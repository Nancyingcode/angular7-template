import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ButtonProp } from '../button/buttonNormal/index';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dash',
    templateUrl: './dash.html',
    styleUrls: ['./dash.less']
})

export class DashComponent implements OnInit {
    @Input() props: ButtonProp[];
    public items: ButtonProp[];
    public selectedItem: any;

    constructor(private router: Router) { }
    ngOnInit() {
        this.setItem();
    }

    setItem() {
        const list = [{
            value: '帐号信息管理',
            router: '/account-mana/account'
        }, {
            value: '帐号信息管理',
            router: '/'
        }, {
            value: '帐号信息管理',
            router: '/'
        }, {
            value: '帐号信息管理',
            router: '/'
        }];
        this.items = list;
    }

    select(item: any) {
        this.selectedItem = item;
        item.callback(this.router, item.router);
    }

}
