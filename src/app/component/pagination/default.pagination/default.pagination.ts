import { Component, Input, OnInit } from '@angular/core';
import { Config, Log, Pagination } from '../index';
const console = new Log('DefaultPaginationComponent');
const { pageSize } = Config;

@Component({
  selector: 'app-default-pagination',
  templateUrl: './default.pagination.html',
  styleUrls: ['./default.pagination.less']
})

export class DefaultPaginationComponent implements OnInit {
  @Input() total: any; // total of item
  @Input() service: any;
  @Input() nzPageSize: number;
  @Input() isPagination: boolean;
  @Input() pagination: Pagination;
  public currentPage: number;

  constructor() {
    this.nzPageSize = 10;
    this.isPagination = true;
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.nzPageSize = pageSize;
    // this.setTotal();
  }

  setTotal(): void {
    // this.total = this.total * this.nzPageSize;
  }

  change(obj: any): void {
    this.pagination.callback(obj._pageIndex);
  }
}
