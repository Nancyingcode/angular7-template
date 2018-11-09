import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../../config/config';
import { AdminService } from 'src/app/service/admin.service';
import { Log } from '../../../../tools/console';
const { adminU, adminA, adminD } = Config.userMana;
const console = new Log('AdminInfoComponent');

@Component({
    selector: 'app-admin-info',
    templateUrl: './admin.info.html',
    styleUrls: ['./admin.info.less']
})

@Injectable()
export class AdminInfoComponent implements OnInit {

    public buttonTotal = '总人数';
    public img = '../../../../assets/pic/admin-mana-user.png';
    public buttonAdd = {
        name: '添加管理员'
    };
    public data: any[] = undefined;
    public buttonProps = [{
        name: '修改',
        callback: this.update
    },
    {
        name: '删除',
        callback: this.delete
    }];
    constructor(private router: Router, private as: AdminService) { }

    ngOnInit() {
        this.setData();
    }

    async getData() {
        const data = await this.as.getList();
        console.logger('getData:', data.content);
        return data.content;
    }

    async setData() {
        const data = await this.getData();
        this.data = [
            ['账号', '密码', '最后登录时间', '管理员属性'],
            ['id', 'pwd', 'lastLoginTime', 'level'],
            data
        ];
    }

    async delete(managerId: number) {
        const res = await this.as.deleteManager(managerId);
    }

    async update(data: any) {
        const res = await this.as.updateManager(data);
        this.router.navigate([adminA]);
    }
}
