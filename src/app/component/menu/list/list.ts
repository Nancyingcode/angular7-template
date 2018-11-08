import { Component, Injectable, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router } from '@angular/router';
import { Log } from '../../../tools/console';
import { List } from '../index';
import { Config } from '../../../config/config';
const { admin, account } = Config.userMana;
const console = new Log('ListComponet');
@Component({
    selector: 'app-list',
    templateUrl: './list.html',
    styleUrls: ['./list.less']
})

@Injectable()
export class ListComponent implements OnInit, OnChanges {
    @Input() list: List[];
    public selectedList: List = undefined;
    constructor(private router: Router) { }

    ngOnInit() {
        this.setDefaultItem();
        this.go(this.selectedList.url);
    }

    ngOnChanges() {
        this.setDefaultItem(); // list更新时候也刷新
    }

    select(list?: List) {
        this.selectedList = list;
        this.go(list.url);
    }

    setDefaultItem() {
        this.selectedList = this.getFirstObj(this.list);
    }

    go(url: string) {
        this.router.navigate([url]);
    }

    getFirstObj(obj: any) {
        return obj[0];
    }


}
