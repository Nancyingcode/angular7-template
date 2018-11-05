import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../config/config';
const { userM } = Config.userMana;
@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.less']
})


@Injectable()
export class HomeComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() {
        this.setDefaultPage();
    }

    go(url: string) {
        this.router.navigate([url]);
    }

    setDefaultPage() {
        this.go(userM);
    }
}
