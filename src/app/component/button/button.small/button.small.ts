import { Component, Injectable, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { hasOwnProperty } from '../../nav';

const themes = {
  'primary': 'btn sm-btn',
  'default': 'btn default-btn',
  'delete': 'btn delete-btn',
  'disable': 'btn disable-btn',
  'success': 'btn success-btn',
  'info': 'btn info-btn',
  'purple': 'btn purple-btn',
  'text': 'btn text-btn'
};

@Component({
  selector: 'app-small-button',
  templateUrl: './button.small.html',
  styleUrls: ['./button.small.less'],
  encapsulation: ViewEncapsulation.None
})

export class SmallButtonComponent implements OnInit, OnChanges {
  @Input() prop: any;
  @Input() data: any;
  @Input() isLoading: boolean;
  public clz: string;
  public buttonType: string;
  public choose: string;

  constructor() {
    this.clz = 'btn sm-btn';
    this.buttonType = 'button';
    this.isLoading = false;
    this.choose = '';
  }

  ngOnInit(): void {
    this.setTheme();
    this.setButtonType();
    this.setChoose();
  }

  ngOnChanges(): void {
    this.setTheme();
    this.setButtonType();
    this.setChoose();
  }

  setTheme(): void {
    const { prop } = this;
    if (hasOwnProperty(prop, 'style')) {
      this.clz = themes[prop.style];
    }
  }

  setButtonType(): void {
    const { prop } = this;
    if (hasOwnProperty(prop, 'type')) {
      this.buttonType = prop.type;
    }
  }

  setChoose(): void {
    const { prop } = this;
    if (hasOwnProperty(prop, 'choose')) {
      this.choose = prop.choose;
    }
  }

  onloading(): void {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
  }

  select(e: any): void {
    const { prop } = this;
    // if (prop.type === 'submit') {
    //   return false;
    // }

    prop.callback(this.data ? this.data : {});
    e.stopPropagation();
  }

}
