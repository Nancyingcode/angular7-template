import { Component, HostBinding, Injectable } from '@angular/core';

@Component({
  selector: 'app-form-group',
  template: `<ng-content></ng-content>`,
})

export class FormGroupComponent {
  @HostBinding('class.form-group') formGroup = true;
  @HostBinding('class.row') row = true;
}
