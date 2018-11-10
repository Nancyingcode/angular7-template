import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav.less']
})

@Injectable()
export class NavComponent {
    public img = '../../../assets/pic/start.png';
    public logOut = '退出登录';

    constructor(private router: Router) { }

    loginOut() {
        this.router.navigate(['/home']);
    }

    go() {
        this.router.navigate(['/home']);
    }
}
