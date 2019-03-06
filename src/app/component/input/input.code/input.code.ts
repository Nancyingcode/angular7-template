import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-code-input',
  template: `<ng-content></ng-content>`,
  styles: [`
    .w240{
      min-width: 240px;
    }
    `]
})

export class InputCodeComponent {
  @HostBinding('class.rlt') rlt = true;
  @HostBinding('class.w240') w = true;
}
