import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ButtonModule, PaginationModule } from '../component';
import { InputModule } from '../input/input';
import { AnnounceDetailComponent } from './announce/detail/announce';
import { FilterTableComponent } from './filter-table/filter-table.component';
import {
  AnnounceTableComponent,
  P2PTableDetailComponent,
  TableComponent,
  TableDetailComponent,
  TableDoubleDetailComponent,
  TableFunctionComponent
} from './table';

@NgModule({
  declarations: [
    TableComponent,
    TableDetailComponent,
    TableDoubleDetailComponent,
    TableFunctionComponent,
    AnnounceTableComponent,
    P2PTableDetailComponent,
    AnnounceDetailComponent,
    FilterTableComponent
  ],

  imports: [
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    PaginationModule
  ],

  exports: [
    TableComponent,
    TableDetailComponent,
    TableDoubleDetailComponent,
    TableFunctionComponent,
    AnnounceTableComponent,
    P2PTableDetailComponent,
    FilterTableComponent
  ],
  entryComponents: [AnnounceDetailComponent]
})

export class TableModule { }
