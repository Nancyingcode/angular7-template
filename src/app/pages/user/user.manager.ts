import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-manager',
    templateUrl: './user.manager.html',
    styleUrls: ['./user.manager.less']
})

export class UserManagerComponent {

    public data: any[] = [
        ['ID', '姓名', '地址'], ['id', 'name', 'addr'], [{
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
