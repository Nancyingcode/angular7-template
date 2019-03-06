import { Component, Injectable, Input, OnChanges, OnInit } from '@angular/core';
import { Log, NormalButton } from './index';
const console = new Log('TableDetailComponent');

@Component({
    selector: 'app-table-detail',
    templateUrl: './detail.html',
    styleUrls: ['./detail.less']
})

@Injectable()
export class TableDetailComponent {
    @Input() props: any = undefined;
    @Input() buttons: any = [];

    select(button: NormalButton): void {
        button.callback({});
    }

}
