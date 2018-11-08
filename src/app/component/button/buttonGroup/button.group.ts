import { Component, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Log } from '../../../tools/console';
import { Config } from '../../../config/config';
const { marketL, marketU } = Config.sysMana;
import { from } from 'rxjs';
const console = new Log('ButtonComponent');
interface Prop {
    name: string;
    callback: any;
}

@Component({
    selector: 'app-button-group',
    templateUrl: './button.group.html',
    styleUrls: ['./button.group.less']
})

export class ButtonComponent {
    @Input() props: Prop;

    /**
     * 点击的方法
     * callback
     */
    constructor(private router: Router) { }
    select(button: any) {
        console.err(marketL);
        button.callback(this.router);
    }
}
