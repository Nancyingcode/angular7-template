import { Component, Injectable, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
    selector: 'app-range-pick',
    templateUrl: './range.pick.html',
    styleUrls: ['./range.pick.less']
})

@Injectable()
export class RangePaginationComponent implements OnInit {


    constructor() { setTheme('bs4'); }

    ngOnInit() {

    }
}
