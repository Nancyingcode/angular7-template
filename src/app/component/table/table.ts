import { Component, Injectable } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    styleUrls: ['./table.less']
})

export class TableComponent {
    public tabTitles = ['ID', '姓名', '地址']; // 表格的标题
    public tabProps: any = ['id', 'name', 'addr']; // 表格显示的字段
    public list: any[] = [{
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
    }];
}
