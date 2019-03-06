import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ButtonModule } from '../component';
import { NavComponent } from './nav';

@NgModule({
  declarations: [ NavComponent ],
  exports     : [ NavComponent ],
  imports     : [ NgZorroAntdModule, CommonModule, ButtonModule ]
})

export class NavModule { }
