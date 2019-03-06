import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ButtonModule } from '../component';
import { DashboradComponent } from './dashborad';

@NgModule({
  declarations: [ DashboradComponent ],
  exports     : [ DashboradComponent ],
  imports     : [ NgZorroAntdModule, CommonModule, ButtonModule ]
})

export class DashboradModule { }
