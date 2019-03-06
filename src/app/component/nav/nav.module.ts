import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ButtonModule } from '../button/button.module';
import { NavComponent } from './normal/nav';

@NgModule({
  declarations: [ NavComponent ],
  exports     : [ NavComponent ],
  imports     : [ NgZorroAntdModule, CommonModule, ButtonModule ]
})

export class NavModule { }
