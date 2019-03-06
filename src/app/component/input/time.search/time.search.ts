import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
import { hasOwnProperty, Log, NotNamedButton } from '../index';

const console = new Log('InputTimeSearchComponent');

@Component({
  selector: 'app-time-search',
  templateUrl: './time.search.html',
  styleUrls: ['./time.search.less']
})

export class InputTimeSearchComponent implements OnInit {
  @Input() props: NotNamedButton;
  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  isEnglish = false;

  constructor(private i18n: NzI18nService) { }

  ngOnInit(): void {}

  onChange(result: Date): void {
    const props = this.props;
    if (props) {
      if (hasOwnProperty(props, 'callback')) {
        props.callback(result);
      }
    }
  }

  getWeek(result: Date): void {

  }

  changeLanguage(): void {
    this.i18n.setLocale(zh_CN);
    // this.isEnglish = !this.isEnglish;
  }
}
