import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { FormControlComponent } from './form.control/form.control';
import { FormGroupComponent } from './form.group/form.group';
import { InputCodeComponent } from './input.code/input.code';
import { LoginControlComponent } from './input.controller/input.controller';
import { LoginGroupComponent } from './input.group/input.group';
import { SearchInputComponent } from './input.search/search.input';
import { InputSelectComponent } from './input.select/input.select';
import { InputTimeSearchComponent } from './time.search/time.search';

@NgModule({
  declarations: [
    SearchInputComponent,
    InputSelectComponent,
    InputTimeSearchComponent,
    FormControlComponent,
    FormGroupComponent,
    LoginControlComponent,
    LoginGroupComponent,
    InputCodeComponent
  ],
  exports: [
    SearchInputComponent,
    InputSelectComponent,
    InputTimeSearchComponent,
    FormControlComponent,
    FormGroupComponent,
    LoginControlComponent,
    LoginGroupComponent,
    InputCodeComponent
  ],
  imports: [NgZorroAntdModule, CommonModule, FormsModule]
})

export class InputModule { }
