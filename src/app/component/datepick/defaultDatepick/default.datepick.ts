import { Component, Injectable, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
    selector: 'app-default-datepick',
    templateUrl: './default.datepick.html',
    styleUrls: ['./default.datepick.less']
})

@Injectable()
export class DefaultDatePickComponent implements OnInit {
    bsValue: string;
    constructor() { setTheme('bs4'); }

    ngOnInit() {

    }


}
