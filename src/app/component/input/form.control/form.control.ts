import { Component, HostBinding, Injectable } from '@angular/core';

@Component({
  selector: 'app-form-control',
  template: `<ng-content></ng-content>`,
  styles: [
  ]
})

export class FormControlComponent {
  @HostBinding('class.col-sm-3') colSm = true;
}
