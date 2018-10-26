import { Component, Injectable, Input } from '@angular/core';

@Component({
    selector: 'app-button-group',
    templateUrl: './button.group.html',
    styleUrls: ['./button.group.less']
})

export class ButtonComponent {
    @Input() buttonProps = ['add', 'del', 'edi'];
}
