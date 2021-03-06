import { animate, style, transition, trigger } from '@angular/animations';

export const showAnimations = trigger('showAnimations', [
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
        ]);
