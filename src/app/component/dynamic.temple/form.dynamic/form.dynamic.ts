import { Component, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormItem } from './index';

@Component({
  selector: 'app-dynamic-form-item',
  templateUrl: './form.dynamic.html',
  styleUrls: ['./form.dynamic.less']
})

export class DynamicFormItemComponent {
  @Input() item: FormItem[]; // 表单项
  @Input() form: FormGroup;  // 表单对象

  constructor() {
    this.item = [];
    this.form = undefined;
  }
}
