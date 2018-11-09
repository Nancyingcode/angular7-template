import { Component, Injectable, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../../config/config';
import { AccountService } from 'src/app/service/account.service';
import { Log } from '../../../../tools/console';
const { accountU } = Config.userMana;
const console = new Log('AccountInfoComponent');
// const { } = Config.apis;
@Component({
    selector: 'app-account-info',
    templateUrl: './account.info.html',
    styleUrls: ['./account.info.less']
})

@Injectable()
export class AccountInfoComponent implements OnInit, OnChanges {

    public data: any[];
    public api = '';
    public buttonProps = [{
        name: '修改',
        callback: this.update
    }];
    constructor(private router: Router, private as: AccountService) {
        this.setData();
    }

    async ngOnInit() {
        await this.setData();
    }

    ngOnChanges() { }


    async getData() {
        const res = await this.as.getInfoList();
        console.logger('geData', JSON.stringify(res.content));
        return res.content;
    }

    async setData() {
        const data = await this.getData();
        this.data = [
            ['账号', '密码', '最后登录时间', '管理员属性'],
            ['account', 'loginPassword', 'createdTime', 'realName'],
            data
        ];
    }

    update(router: Router) {
        this.router.navigate([accountU]);
    }
}
