import { Component, Injectable, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.less']
})

@Injectable()
export class MenuComponent implements OnInit {

    constructor() { setTheme('bs4'); }

    ngOnInit() {

    }


}
