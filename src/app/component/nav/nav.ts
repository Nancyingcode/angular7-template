import { Component, Injectable } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav.less']
})

@Injectable()
export class NavComponent {
    public img = '../../../assets/pic/start.png';
    public logOut = '退出登录';
}
