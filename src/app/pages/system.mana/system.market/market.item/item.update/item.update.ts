import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { Config } from '../../../../../config/config';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item-update',
    templateUrl: './item.update.html',
    styleUrls: ['./item.update.less']
})

export class ItemUpdateComponent {
    public props = {
        alert: ['商城管理', '产品列表', '修改产品信息'],
        callback: this.go
    };

    go(router: Router, url: string) {
        router.navigate([url]);
    }
}
