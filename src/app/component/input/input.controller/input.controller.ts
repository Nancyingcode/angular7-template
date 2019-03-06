import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-login-control',
    template: `<ng-content></ng-content>`,
    styles: [`
    .w240{
      min-width: 240px;
    }
    `]
})

export class LoginControlComponent {
  @HostBinding('class.rlt') rlt = true;
  @HostBinding('class.w240') w = true;
}
