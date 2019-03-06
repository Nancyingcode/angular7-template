import { Component, Input, OnInit } from '@angular/core';

import { isEmpty } from 'lodash';
import { hasOwnProperty, Log, NormalButton, NotNamedButton } from './index';

const console = new Log('FilterTableComponent');

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.less']
})

export class FilterTableComponent implements OnInit {
  @Input() props;
  @Input() buttonProps: NormalButton[];
  @Input() filter: (text: string, column: string) => void;
  @Input() isPagination: boolean;
  @Input() pagination: NotNamedButton;
  public tabTitles: string[]; // 表格的标题
  public tabProps: string[]; // 表格显示的字段
  public currentTitle: string;
  public searchs: {};
  public total: number;
  public list;
  public searchButton: NotNamedButton;

  constructor() {
    this.props = undefined;
    this.isPagination = false;
    this.total = 1;
    this.currentTitle = '查询';
    this.searchs = {};

    this.filter = () => {};
    this.searchButton = {
      placeholder: this.currentTitle,
      callback: (text: string) => {}
    };
  }

  ngOnInit(): void {
    // this.searchButton = {

    // }
  }

  checkButtons(props: any): boolean {
    return isEmpty(props);
  }

  setCurrentTitle = (e, title, i): any => {
    const column = this.props.column[i];
    this.searchButton = {
      placeholder: title,
      callback: (text: string) => {
        this.filter(text, column);
        if (hasOwnProperty(this.searchs, column)) {
          this.searchs[column] = text;
          return;
        }

        this.searchs = { ...this.searchs, [column]: text };
      }
    };
  }

  /**
   * 有筛选项
   * @param index
   */
  hasFilter(index: number): boolean {
    let hasFilter = false;
    const { filters } = this.props;
    if (filters) {
      filters.forEach(item => {
        if (this.props.column[index] === item) {
          hasFilter = true;
          return;
        }
      });
    }

    return hasFilter;
  }

  /**
   * 显示搜索内容
   */
  searchText(index: number): string {
    const column = this.props.column[index];
    return this.searchs[column];
  }

  /**
   * 显示标签
   */
  showTag(index: number): boolean {
    const column = this.props.column[index];
    if (hasOwnProperty(this.searchs, column)) {
      if (isEmpty(this.searchs[column])) {
        return false;
      }

      return true;
    }

    return false;

  }

  /**
   * 关闭标签
   * @param index
   */
  onClose(index: number): void {
    const column = this.props.column[index];
    this.searchs[column] = '';

    // 更新数据
    this.filter('', column);
  }
}
