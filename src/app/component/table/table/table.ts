import {
  Component,
  Injectable,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { isEmpty } from 'lodash';
import { hasOwnProperty, Log, NormalButton, NotNamedButton, TableProps } from './index';

const console = new Log('TableComponent');

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.less'],
  encapsulation: ViewEncapsulation.None
})

export class TableComponent implements OnInit, OnChanges {
  @Input() type: string; //  表格类型
  @Input() isPagination: boolean; // 是否显示分页
  @Input() props: TableProps; // 表格参数
  @Input() buttonProps: NormalButton[];   // 表格的按钮组
  @Input() pagination: NotNamedButton;    // 分页按钮
  @Input() filter: (text: string, column: string) => void;
  public tabTitles: string[]; // 表格的标题
  public tabProps: string[]; // 表格显示的字段
  public currentTitle: string;
  public searchButton: NotNamedButton;
  public total: number;
  public list;
  public searchs: {};

  constructor() {
    this.props = {
      title: [],
      column: [],
      list: [],
      selecters: [ { text: '默认', value: '1' } ],
      count: 0
    };

    this.isPagination = false;
    this.total = 1;
    this.currentTitle = '查询';
    this.type = 'default';
    this.searchs = {};
    this.filter = () => {};

    this.searchButton = {
      placeholder: this.currentTitle,
      callback: (text: string) => {}
    };
  }

  ngOnInit(): void { }

  ngOnChanges(): void { }

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

  selectFilter = (dropdown, select, i): any => {
    const column = this.props.column[i];
    const { value, text } = select;
    this.filter(value, column);
    dropdown.nzVisible = false;
    if (hasOwnProperty(this.searchs, column)) {
      this.searchs[column] = text;
      return;
    }

    this.searchs = { ...this.searchs, [column]: text };
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
