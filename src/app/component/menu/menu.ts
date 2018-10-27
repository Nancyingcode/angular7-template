import { Component, Injectable, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

import { Router } from '@angular/router';
import { Log } from '../../tools/console';
import { Menu } from './index';

const console = new Log('MenuComponet');
@Component({
    selector: 'app-menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.less']
})

@Injectable()
export class MenuComponent implements OnInit {
    public menuList: Menu[] = [
        {
            name: 'Home',
            url: '/app-manager'
        }, {
            name: 'Profile',
            url: '/app-manager'
        }, {
            name: 'User',
            url: '/app-manager'
        },
        {
            name: 'Settings',
            url: '/app-manager'
        }];
    public selectedMenu: Menu = undefined;
    constructor(private router: Router) { setTheme('bs4'); }

    ngOnInit() {
        this.onSelect();
    }

    onSelect(menu?: Menu) {
        if (this.selectedMenu === undefined) {
            this.setDefaultButton();
            return;
        }
        this.selectedMenu = menu;
        this.go(menu.url);
    }

    go(url: string) {
        this.router.navigate([url]);
    }

    setDefaultButton() {
        this.selectedMenu = this.getFirstMenu();
    }

    getFirstMenu() {
        return this.menuList[0];
    }


}
