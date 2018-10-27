import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Log } from '../../tools/console';

const console = new Log('TableComponent');
@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    styleUrls: ['./table.less']
})

@Injectable()
export class TableComponent implements OnInit {
    @Input() props: any[];
    public tabTitles = ['ID', '姓名', '地址']; // 表格的标题
    public tabProps: any = ['id', 'name', 'addr']; // 表格显示的字段
    public buttonProps: any[] = ['add', 'del', 'edi'];
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
    constructor() {
    }

    ngOnInit() {
        console.log('props', this.props);
        this.tabTitles = this.props[0];
        this.tabProps = this.props[1];
        this.list = this.props[2];
    }
}
