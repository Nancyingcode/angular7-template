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
    public selectedItem: any;

    constructor(private router: Router) { }

    ngOnInit() { this.setDefaultButton(); }

    select(item: any) {
        this.selectedItem = item;
        item.callback(this.router, item.router);
    }

    /**
     * 第一个是默认
     */
    setDefaultButton() {
        this.selectedItem = this.props[0];
    }

}
