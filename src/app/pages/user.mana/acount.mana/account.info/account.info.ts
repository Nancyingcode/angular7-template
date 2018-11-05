import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../../config/config';

@Component({
    selector: 'app-account-info',
    templateUrl: './account.info.html',
    styleUrls: ['./account.info.less']
})

@Injectable()
export class AccountInfoComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        // this.setDefault();
    }

    setDefault() {
        // this.router.navigate([Config.routerList.actMana]);
    }
}
