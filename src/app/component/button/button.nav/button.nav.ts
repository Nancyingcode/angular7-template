import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ButtonProp } from './index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  templateUrl: './button.nav.html',
  styleUrls: ['./button.nav.less']
})

@Injectable()
export class NavButtonComponent implements OnInit {
  @Input() buttonProp: ButtonProp;
  @Input() active = false;
  public item: ButtonProp;

  constructor() { }

  ngOnInit() {
    // this.setItem();
  }

  setItem() {
    this.item = this.buttonProp;
    return this;
  }
}
