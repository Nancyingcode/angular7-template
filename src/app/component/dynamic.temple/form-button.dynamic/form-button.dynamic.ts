import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormItem, NormalButton } from './index';

@Component({
  selector: 'app-dynamic-form-button-item',
  templateUrl: './form-button.dynamic.html',
  styleUrls: ['./form-button.dynamic.less']
})
export class FormButtonDynamicComponent {
  @Input() item: FormItem[]; // 表单项
  @Input() form: FormGroup;  // 表单对象
  @Input() button: NormalButton;

  constructor() {
    this.item = [];
    this.form = undefined;
    this.button = {
      name: '确认',
      type: 'submit',
      callback: () => {}
    };
  }

  data(name: string): any {
    return { param: name, value: this.form.get(name).value };
  }
}
