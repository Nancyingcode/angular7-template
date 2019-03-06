import { Component, Injectable, Input, OnChanges, OnInit } from '@angular/core';
import { Log } from '../../../tools/console';
const console = new Log('TableDetailComponent');

@Component({
  selector: 'app-table-double-detail',
  templateUrl: './detail.double.html',
  styleUrls: ['./detail.double.less']
})

export class TableDoubleDetailComponent implements OnInit, OnChanges {
  @Input() props: any = undefined;
  @Input() buttons: any = [];

  ngOnInit(): void { this.setState(); }

  ngOnChanges(): void { this.setState(); }

  setState(): void { }

  select(button: any): void {
    button.callback();
  }

}
