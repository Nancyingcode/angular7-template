import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.html',
    styleUrls: ['./manager.less']
})

export class ManagerComponent {

    public data: any[] = [
        ['ID', '姓名', '地址', '操作'], ['id', 'name', 'addr'], [{
            id: 1,
            name: 'nancying1',
            addr: 'baoan'
        }, {
            id: 2,
            name: 'nancying2',
            addr: 'baoan'
        }, {
            id: 3,
            name: 'nancying3',
            addr: 'baoan'
        }]
    ];
    constructor() {
        console.log(this.data);
    }


    async add() { }

    async update() { }

    async delete() { }
}
