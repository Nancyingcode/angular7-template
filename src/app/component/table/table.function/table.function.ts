import {
  Component,
  Injectable,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import * as _ from 'lodash';
import { Log } from './index';

const console = new Log('TableFunctionComponent');

interface Prop {
  name: string;
  callback: any;
}

@Component({
  selector: 'app-function-table',
  templateUrl: './table.function.html',
  styleUrls: ['./table.function.less'],
  encapsulation: ViewEncapsulation.None
})

export class TableFunctionComponent implements OnInit, OnChanges {
  @Input() props: any[];
  @Input() buttonProps: Prop[];
  @Input() isPagination = false;
  @Input() pagination;
  public tabTitles;         // 表格的标题
  public types: any;    // 表格组件的类型
  public tabProps: any;    // 表格显示的字段
  public list: any[];
  public total = 20;

  constructor() {
    this.props = undefined;
  }

  ngOnInit(): void { this.setState(); }

  ngOnChanges(): void { this.setState(); }

  setState(): void {
    if (this.props) {
      const [tabTitles, tabProps, list, total, callbacks] = this.props;
      const newList = list.map(item => {
        const newItem = {};
        tabProps.forEach((tab, i) => {
          const callback = callbacks[i];
          switch (tab.indexOf('Img')) {
            case -1: {
              newItem[tab] = {
                name    : item[tab] ? item[tab] : '暂无',
                type    : 'button',
                style   : 'text',
                choose  : 'inner',
                callback: () => {
                  if (!_.isEmpty(callback)) {
                    callback(item[tab]);
                  }
                }
              };

              break;
            }

            default: {
              newItem[tab] = {
                name    : item[tab] ? item[tab] : '暂无',
                type    : 'button',
                style   : 'text',
                choose  : 'img',
                callback: () => {
                  // if (!_.isEmpty(callback)) {
                    callback({ value: item[tab], label: tabTitles[i]});
                  // }
                }
              };
            }
          }
        });

        return newItem;
      });

      this.tabTitles = tabTitles;
      this.tabProps  = tabProps;
      this.list      = newList;
      this.total     = total;
    }
  }
}
