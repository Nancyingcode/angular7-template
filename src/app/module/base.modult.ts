import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, PaginationModule, TableModule } from '../component/component';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [ ButtonModule, TableModule, PaginationModule ],
  providers: []
})
export class BaseModule {}
