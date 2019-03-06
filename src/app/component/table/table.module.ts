import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input';
import { PaginationModule } from '../pagination/pagination.module';
import { AnnounceTableComponent } from './announce/announce';
import { AnnounceDetailComponent } from './announce/detail/announce';
import { TableDoubleDetailComponent } from './detail.double/detail.double';
import { TableDetailComponent } from './detail/detail';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { P2PTableDetailComponent } from './p2p/detail/detail';
import { TableFunctionComponent } from './table.function/table.function';
import { TableComponent } from './table/table';

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
