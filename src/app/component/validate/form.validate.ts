import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-form-validate',
  template: `{{explain}}`,
  styles: [],
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
  ],
})

export class FormValidateComponent {
  @Input() explain: string;
  @HostBinding('class.invalid-feedback') feedback = true;
}

