import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../config/config';
import { Log } from '../../tools/console';
import { LoginService } from '../../service/login.service';
const { userM } = Config.userMana;
const console = new Log('Home');
@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.less']
})


@Injectable()
export class HomeComponent implements OnInit {
    constructor(private router: Router, private logins: LoginService) { }
    ngOnInit() {
        // this.logins.login();
        // console.log('Home finished');
        this.setDefaultPage();
    }

    go(url: string) {
        this.router.navigate([url]);
    }

    setDefaultPage() {
        this.go(userM);
    }
}
