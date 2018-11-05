import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-small-button',
    templateUrl: './button.small.html',
    styleUrls: ['./button.small.less']
})

@Injectable()
export class SmallButtonComponent implements OnInit {
    @Input() prop: any;

    constructor() { }

    ngOnInit() {
    }

}
