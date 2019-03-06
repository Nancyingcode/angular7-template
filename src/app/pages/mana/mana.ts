import { Component } from '@angular/core';

import { menu, Config } from './index';
const { menuIcon } = Config.images;

@Component({
  selector: 'app-manager',
  templateUrl: './mana.html',
  styleUrls: ['./mana.less']
})

export class ManaComponent {
  public list: any;
  public jumper: string;

  constructor() {
    this.list = menu[0];
    this.jumper = menuIcon;
  }
}
