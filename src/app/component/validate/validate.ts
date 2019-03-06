import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-login-validate',
    template: `<h6 class="in-validate" [@formValidateAnimation]>{{explain}}</h6>`,
    styles: [`
        .in-validate {
            position: absolute;
            bottom: 0;
            width:auto;
            text-align: left;
            font-size: 10px;
            color: #f5222d;
            background: @color-open;
        }`
    ],
    animations: [
        trigger('formValidateAnimation', [
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateY(-5px)'
                }),
                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                    opacity: 1,
                    transform: 'translateY(0)'
                }))
            ]),
            transition('* => void', [
                style({
                    opacity: 1,
                    transform: 'translateY(0)'
                }),
                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                    opacity: 0,
                    transform: 'translateY(-5px)'
                }))
            ])
        ])
    ]
})
export class LoginValidateComponent {
    @Input() explain: string;
}
