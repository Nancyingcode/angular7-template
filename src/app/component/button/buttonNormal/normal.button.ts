import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ButtonProp } from './index';
import { Router } from '@angular/router';

@Component({
    selector: 'app-normal-button',
    templateUrl: './normal.button.html',
    styleUrls: ['./normal.button.less']
})

@Injectable()
export class NormalButtonComponent implements OnInit {
    @Input() buttonProp: ButtonProp;
    public item: ButtonProp;

    constructor(private router: Router) { }

    ngOnInit() {
        this.setItem();
    }

    setItem() {
        this.item = this.buttonProp;
        return this;
    }

    onClick() {
        const { router } = this.item;
        this.router.navigate([router]);
        return;
    }

}
