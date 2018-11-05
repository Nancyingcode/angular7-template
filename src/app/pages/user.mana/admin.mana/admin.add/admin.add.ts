import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../../config/config';
import { Log } from '../../../../tools/console';
const console = new Log('AdminAddComponent');

@Component({
    selector: 'app-admin-add',
    templateUrl: './admin.add.html',
    styleUrls: ['./admin.add.less']
})

@Injectable()
export class AdminAddComponent implements OnInit {
    public img = '../../../../../assets/pic/pinter.png';
    public alert = '您现在所在的位置 - 管理员管理 - 修改密码';
    constructor(private router: Router) { }

    ngOnInit() {
        console.log(location.pathname);
    }

    setDefault() {

    }
}
