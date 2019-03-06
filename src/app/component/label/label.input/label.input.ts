import { Component, HostBinding } from '@angular/core';
@Component({
    selector: 'app-login-label',
    template: `<ng-content></ng-content>`,
})

export class LoginLabelComponent {
  @HostBinding('class.cus-prepend') prepend = true;
  @HostBinding('class.rlt') rlt = true;
}
