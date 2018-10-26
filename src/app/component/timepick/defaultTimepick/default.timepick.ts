import { Component, Injectable, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
    selector: 'app-default-timepick',
    templateUrl: './default.timepick.html',
    styleUrls: ['./default.timepick.less']
})

@Injectable()
export class DefaultTimePickComponent implements OnInit {

    constructor() { setTheme('bs4'); }

    ngOnInit() {

    }


}
