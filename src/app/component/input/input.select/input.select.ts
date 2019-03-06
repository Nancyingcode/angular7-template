import { Component, Injectable, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { hasOwnProperty, DropDown, Log } from './index';

const console = new Log('SearchInputComponent');
@Component({
  selector: 'app-dropdown',
  templateUrl: './input.select.html',
  styleUrls: ['./input.select.less']
})

export class InputSelectComponent implements OnInit {
  @Input() props: DropDown;
  @Input() handleData: (item: number | string) => void;
  public searchPic: string;
  public placeholder: string;
  public selectedValue: string | number;

  constructor() {
    this.placeholder = '';
    this.searchPic   = '../../../assets/pic/search.png';
  }

  ngOnInit(): void {
    if (hasOwnProperty(this.props, 'placeholder')) {
      this.placeholder = this.props.placeholder;
    }
  }

  change(value: string | number): void {
    this.selectedValue = value;
    if (this.handleData) {
      this.handleData(value);
    }
  }
}
