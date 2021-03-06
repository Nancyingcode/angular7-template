import { Component, Injectable, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../../config/config';
import { Log } from '../../../tools/console';
const console = new Log('ButtonPointerComponent');

interface Prop {
    alert: string[];
    callback: any;
}
@Component({
    selector: 'app-pointer-button',
    templateUrl: './button.pointer.html',
    styleUrls: ['./button.pointer.less']
})

@Injectable()
export class ButtonPointerComponent implements OnInit {
    @Input() alert = ['未知'];
    @Input() props: Prop;
    public img = '../../../../../assets/pic/pinter.png';
    public text = '';
    constructor(private router: Router) { }

    ngOnInit() {
        this.setAlter();
    }

    back() {
        this.props.callback(this.router, '');
    }

    setAlter() {
        this.props.alert.map(item => { this.text += ' - ' + item; });
        this.text = '您现在所在的位置' + this.text;
    }
}
