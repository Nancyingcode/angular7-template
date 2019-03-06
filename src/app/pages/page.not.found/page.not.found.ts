import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../config/config';
import { Log } from '../../tools/console';
import { LoginService } from '../../service/login.service';
const { userM } = Config.userMana;
const console = new Log('PageNotFound');
@Component({
    selector: 'app-page-null',
    templateUrl: './page.not.found.html',
    styleUrls: ['./page.not.found.less']
})


@Injectable()
export class PageNotFoundComponent implements OnInit {
    public title = 'Woops!';
    public content = '页面没有找到,如果是正常操作请联系客服';
    public text = '我们很抱歉，服务器出了问题';
    private timer = 5000;

    constructor(private router: Router) { }

    async ngOnInit() {
        // this.router.navigate(['../']);
        await this.go();
    }

    async go() {
        await setTimeout(() => {
            console.log(this);
            // this.router.navigate(['../']);
        }, this.timer);
    }

}
