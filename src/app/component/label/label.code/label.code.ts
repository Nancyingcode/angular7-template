import { Component, HostBinding } from '@angular/core';
@Component({
  selector: 'app-login-code-label',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./label.code.less']
})

export class LoginLabelCodeComponent {
  @HostBinding('class.cus-after') prepend = true;
  @HostBinding('class.rlt') rlt = true;
}
