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
            name: '管理员管理',
            url: '/admin-mana'
        }, {
            name: '账号管理',
            url: '/account-mana'
        }];
    public menuPics = ['../../../assets/pic/menu-user.png',
        '../../../assets/pic/menu-mana.png'];
    public firstMenu = [
        {
            pic: '../../../assets/pic/menu-user.png',
            title: '用户管理'
        },
        {
            pic: '../../../assets/pic/menu-mana.png',
            title: '系统管理'
        }
    ];
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
        this.go(this.selectedMenu.url);
    }

    getFirstMenu() {
        return this.menuList[0];
    }


}
