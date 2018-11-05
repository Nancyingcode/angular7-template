import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../config/config';
const { adminU, adminA, adminD, adminI } = Config.userMana;
@Component({
    selector: 'app-admin-mana',
    templateUrl: './admin.mana.html',
    styleUrls: ['./admin.mana.less']
})

@Injectable()
export class AdminManaComponent implements OnInit {

    constructor(private router: Router) { }
    ngOnInit() {
        this.setDefault();
    }

    setDefault() {
        this.router.navigate([adminA]);
    }

}
