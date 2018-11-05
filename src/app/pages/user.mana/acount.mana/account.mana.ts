import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from '../../../config/config';

const { userM, account, accountI } = Config.userMana;


@Component({
    selector: 'app-account-mana',
    templateUrl: './account.mana.html',
    styleUrls: ['./account.mana.less']
})

@Injectable()
export class AccountManaComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        this.setDefault();
    }

    setDefault() {
        this.router.navigate([accountI]);
    }
}
