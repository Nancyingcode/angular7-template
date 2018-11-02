import { Component, Injectable, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

import { Router } from '@angular/router';
import { Log } from '../../tools/console';

const console = new Log('SearchInputComponent');
@Component({
    selector: 'app-search-input',
    templateUrl: './search.input.html',
    styleUrls: ['./search.input.less']
})

@Injectable()
export class SearchInputComponent implements OnInit {
    public searchPic = '../../../assets/pic/search.png';
    constructor(private router: Router) { setTheme('bs4'); }

    ngOnInit() {
    }


}
