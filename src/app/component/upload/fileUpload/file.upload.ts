import { Component, Injectable, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

import { Router } from '@angular/router';
import { Log } from '../../../tools/console';
const console = new Log('FileUploadComponet');
@Component({
    selector: 'app-file-upload',
    templateUrl: './file.upload.html',
    styleUrls: ['./file.upload.less']
})

@Injectable()
export class FileUploadComponent implements OnInit {

    constructor(private router: Router) { setTheme('bs4'); }

    ngOnInit() { }



}
