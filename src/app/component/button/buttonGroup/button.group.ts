import { Component, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Log, NormalButton } from '../index';

const console = new Log('ButtonComponent');

@Component({
  selector: 'app-button-group',
  templateUrl: './button.group.html',
  styleUrls: ['./button.group.less']
})

export class ButtonGroupComponent {
  @Input() props: NormalButton[];
  @Input() data: {}; // 要操作的对象

  /**
   * 点击的方法
   * callback
   */
  constructor(private router: Router) { }

  /**
   *
   * 兼容老本的代码
   */
  select(button: NormalButton): void {
    button.callback(this.data);
  }
}
