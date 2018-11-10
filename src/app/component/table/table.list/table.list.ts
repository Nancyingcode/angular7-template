import {
    Component, Injectable, Input, OnInit, ViewChild, ElementRef,
    AfterViewInit, QueryList, Renderer2, RendererFactory2, ViewChildren
} from '@angular/core';
import { Log } from '../../../tools/console';

const console = new Log('TableListComponent');
// declare var $: JQueryStatic;
interface Prop {
    name: string;
    callback: any;
}
@Component({
    selector: 'app-table-list',
    templateUrl: './table.list.html',
    styleUrls: ['./table.list.less']
})

@Injectable()
export class TableListComponent implements OnInit {
    @Input() props: any[];
    @Input() api: string;
    @Input() buttonProps: Prop[];
    public tabTitles; // 表格的标题
    public tabProps: any; // 表格显示的字段
    public list: any[];

    ngOnInit() {
        this.setState();
    }

    setState() {
        console.logger('props', this.props);
        this.tabProps = this.props[0];
        this.list = this.props[1];
    }
}
