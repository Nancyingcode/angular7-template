import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DefaultPaginationComponent } from './default.pagination/default.pagination';

@NgModule({
  declarations: [ DefaultPaginationComponent ],
  imports     : [ NgZorroAntdModule, CommonModule ],
  exports     : [ DefaultPaginationComponent ]
})

export class PaginationModule { }
