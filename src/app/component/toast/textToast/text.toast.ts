import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
    selector: 'app-text-toast',
    templateUrl: './text.toast.html',
    styleUrls: ['./text.toast.less']
})
export class TextToastComponent {
    public isVisible = true;
    private callbackOk: any;
    private callbackCancel: any;
    @Input()
    set Title(title: string) { this.title = title; }
    get Title(): string { return this.title; }
    title: string;

    @Input()
    set Message(message: string) {
        this.message = message;
    }
    get Message(): string { return this.message; }
    message: string;

    @Input()
    set confirm(callback: any) {
        this.callbackOk = callback;
    }

    @Input()
    set close(callback: any) {
        this.callbackCancel = callback;
    }

    @Output()
    closed = new EventEmitter();

    handleOk() {
        this.isVisible = false;
        this.callbackOk();
    }


    handleCancel() {
        this.isVisible = false;
        this.callbackCancel();
        this.closed.next();
    }
}
