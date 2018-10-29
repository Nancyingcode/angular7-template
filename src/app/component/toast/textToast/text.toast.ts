import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
    selector: 'app-text-toast',
    templateUrl: './text.toast.html',
    animations: [
        trigger('state', [
            state('opened', style({ transform: 'translateY(0%)' })),
            state('void, closed', style({ transform: 'translateY(100%)', opacity: 0 })),
            transition('* => *', animate('100ms ease-in')),
        ])
    ],
    styleUrls: ['./text.toast.less']
})
export class TextToastComponent {
    private state: 'opened' | 'closed' = 'closed';
    public isVisible = true;
    @Input()
    set message(message: string) {
        this._message = message;
        this.state = 'opened';
    }
    get message(): string { return this._message; }
    _message: string;

    @Output()
    closed = new EventEmitter();

    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}
