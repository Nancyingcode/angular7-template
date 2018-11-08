import { Component, Injectable, OnInit, Input, OnChanges } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router } from '@angular/router';
import { Log } from '../../tools/console';
import { List } from './index';
import { Config } from '../../config/config';
const { userM, admin, account } = Config.userMana;
const { sysM, market, mine, invitation, trade, sHome } = Config.sysMana;
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
            url: market
        }, {
            name: '关于我们栏目管理',
            url: mine
        }, {
            name: '邀请码管理',
            url: invitation
        },
        {
            name: '首页设计',
            url: sHome
        }
    ]
};
@Component({
    selector: 'app-menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.less']
})

@Injectable()
export class MenuComponent implements OnInit, OnChanges {
    @Input() index: number;
    public list: any[];
    public firstMenu =
        [
            {
                index: 0,
                pic: '../../../assets/pic/menu-user.png',
                dpic: '../../../assets/pic/menu-user.png',
                gpic: '../../../assets/pic/menu-user-gray.png',
                title: '用户管理',
                url: userM
            },
            {
                index: 1,
                pic: '../../../assets/pic/menu-mana.png',
                dpic: '../../../assets/pic/menu-mana.png',
                gpic: '../../../assets/pic/menu-mana-gray.png',
                title: '系统管理',
                url: sysM,
            }
        ];
    public selectedMenu: any = undefined;
    public selectedList: List = undefined;
    constructor(private router: Router) { setTheme('bs4'); }

    ngOnInit() {
        this.setDefaultMenu();
    }

    ngOnChanges() {
        console.log('change!');
    }

    selectMenu(item: any) {
        this.selectedMenu = item;
        this.setMenuList(item.index);
    }

    go(url: string) {
        this.router.navigate([url]);
    }


    setDefaultMenu() {
        this.selectedMenu = this.getFirstObj(this.firstMenu, this.index);
        this.setMenuList(this.index);
    }

    setMenuList(index: number) {
        this.list = secondMenu[index];
    }

    getFirstObj(obj: any, index: number) {
        return obj[index];
    }


}
