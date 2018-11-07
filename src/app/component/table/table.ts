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
    @Input() api: string;
    @Input() buttonProps: Prop[];
    public tabTitles; // 表格的标题
    public tabProps: any; // 表格显示的字段
    public list: any[];
    constructor(private renderer: Renderer2) {
    }

    @ViewChildren('table') tb: ElementRef;
    ngOnInit() {
        this.setState();
    }

    ngAfterViewInit() {
        // const tableW = this.tb.nativeElement.offsetWidth;
        // console.log(Object.keys(this.td));
        // this.td.map(item => {
        //     console.log(item);
        // });

    }

    setState() {
        console.log(this.props);
        this.tabTitles = this.props[0];
        this.tabProps = this.props[1];
        this.list = this.props[2];
    }

    getData() {
        console.log('getData');
    }
}
