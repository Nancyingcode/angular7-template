import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ListComponent } from './list/list';

@NgModule({
  declarations: [ ListComponent ],
  imports     : [ NgZorroAntdModule, CommonModule ],
  exports     : [ ListComponent ]
})

export class MenuModule { }
