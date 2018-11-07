import { Component, Injectable, OnInit, Input } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router } from '@angular/router';
import { Log } from '../../tools/console';
import { List } from './index';
import { Config } from '../../config/config';
const { admin, account } = Config.userMana;
const console = new Log('MenuComponet');
const secondMenu = {
    0: [
        {
            name: '管理员管理',
            url: admin
        }, {
            name: '账号管理',
            url: account
        }],
    1: [
        {
            name: '商城管理',
            url: ''
        }, {
            name: '关于我们栏目管理',
            url: ''
        }, {
            name: '邀请码管理',
            url: ''
        }, {
            name: '交易中心',
            url: ''
        },
        {
            name: '首页设计',
            url: ''
        }
    ]
};
@Component({
    selector: 'app-menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.less']
})

@Injectable()
export class MenuComponent implements OnInit {
    @Input() list: any[];
    public menuList: List[];
    public firstMenu =
        [
            {
                index: 0,
                pic: '../../../assets/pic/menu-user.png',
                dpic: '../../../assets/pic/menu-user.png',
                gpic: '../../../assets/pic/menu-user-gray.png',
                title: '用户管理'
            },
            {
                index: 1,
                pic: '../../../assets/pic/menu-mana.png',
                dpic: '../../../assets/pic/menu-mana.png',
                gpic: '../../../assets/pic/menu-mana-gray.png',
                title: '系统管理'
            }
        ];
    public selectedMenu: any = undefined;
    public selectedList: List = undefined;
    constructor(private router: Router) { setTheme('bs4'); }

    ngOnInit() {
        this.setDefaultMenu();
        this.setDefaultButton();
        console.log('menu:', JSON.stringify(this.menuList));
    }

    onSelect(menu?: List) {
        this.selectedList = menu;
        this.go(menu.url);
    }

    selectMenu(item: any) {
        this.selectedMenu = item;
        this.setMenuList(item.index);
    }

    go(url: string) {
        this.router.navigate([url]);
    }

    setDefaultButton() {
        this.selectedList = this.getFirstObj(this.menuList);
        this.go(this.selectedList.url);
    }

    setDefaultMenu() {
        this.selectedMenu = this.getFirstObj(this.firstMenu);
        this.setMenuList(0);
    }

    setMenuList(index: number) {
        this.menuList = secondMenu[index];
    }

    getFirstObj(obj: any) {
        return obj[0];
    }


}
