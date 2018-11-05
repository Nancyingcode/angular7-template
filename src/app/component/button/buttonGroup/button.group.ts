import { Component, Injectable, Input } from '@angular/core';

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
    select(callback) {
        callback();
    }
}
