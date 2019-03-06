import { Component, Injectable, Input, OnChanges, OnInit } from '@angular/core';

import { isEmpty } from 'lodash';
import { hasOwnProperty, Config, Log, NotNamedButton } from '../index';

const { search } = Config.images;
const console = new Log('SearchInputComponent');

@Component({
  selector: 'app-search-input',
  templateUrl: './search.input.html',
  styleUrls: ['./search.input.less']
})

export class SearchInputComponent implements OnInit, OnChanges {
  @Input() props: NotNamedButton;
  @Input() type: string;
  @Input() ljPlaceholder: string;
  public searchPic: string;
  public placeholder: string;

  constructor() {
    this.ljPlaceholder = '';
    this.placeholder = '';
    this.type = '';
    this.searchPic = search;
  }

  ngOnInit(): void {
    this.setPlaceholder();
  }

  ngOnChanges(): void {
    this.setPlaceholder();
  }

  setPlaceholder(): void {
    if (isEmpty(this.ljPlaceholder)) {
      if (hasOwnProperty(this.props, 'placeholder')) {
        this.placeholder = this.props.placeholder;
      }

      return;
    }

    this.placeholder = this.ljPlaceholder;
  }

  submit(text: string): void {
    this.props.callback(text);
  }
}
