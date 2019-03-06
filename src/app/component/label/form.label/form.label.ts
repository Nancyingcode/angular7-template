import { Component, HostBinding, Injectable } from '@angular/core';

@Component({
  selector: 'app-form-label',
  template: `<ng-content></ng-content>`,
})

export class FormLabelComponent {
  @HostBinding('class.col-sm-2') colSm = true;
  @HostBinding('class.col-form-label') colFormLabel = true;
}
