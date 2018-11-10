import {
    Component, Injectable, Input, OnInit, ViewChild, ElementRef,
    AfterViewInit, QueryList, Renderer2, RendererFactory2, ViewChildren
} from '@angular/core';
import { Log } from '../../tools/console';

const console = new Log('TableComponent');
// declare var $: JQueryStatic;
interface Prop {
    name: string;
    callback: any;
}
@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    styleUrls: ['./table.less']
})

@Injectable()
export class TableComponent implements OnInit, AfterViewInit {
    @Input() props: any[];
    @Input() buttonProps: Prop[];
    @Input() service: any;
    // @Input() searchButton: any;
    public tabTitles; // 表格的标题
    public tabProps: any; // 表格显示的字段
    public list: any[];

    ngOnInit() {
        this.setState();
    }

    ngAfterViewInit() {

    }

    setState() {
        console.logger('props', this.props);
        this.tabTitles = this.props[0];
        const obj = this.props[2];
        // this.tabProps = Object.keys(obj[0]);
        this.tabProps = this.props[1];
        // console.logger(obj[0]);
        this.list = this.props[2];
    }

    getData() {
        console.log('getData');
    }
}
