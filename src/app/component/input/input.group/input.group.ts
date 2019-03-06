import { Component, Injectable, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login-group',
  template: `<ng-content></ng-content>`,
})

@Injectable()
export class LoginGroupComponent {
  @HostBinding('class.cus-input-group') cusInputGroup = true;
  @HostBinding('class.mb-4') mb4 = true;
  @HostBinding('class.rlt') rlt = true;
  @HostBinding('class.w240') w = true;
}
