import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
    selector: 'app-message-toast',
    templateUrl: './message.toast.html',
    styleUrls: ['./message.toast.less']
})
export class MessageToastComponent {
    public isVisible = true;
    private time: number;
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
}
