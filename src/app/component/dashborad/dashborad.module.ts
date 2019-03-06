import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ButtonModule } from '../button/button.module';
import { DashboradComponent } from './normal/dash';

@NgModule({
  declarations: [ DashboradComponent ],
  exports     : [ DashboradComponent ],
  imports     : [ NgZorroAntdModule, CommonModule, ButtonModule ]
})

export class DashboradModule { }
