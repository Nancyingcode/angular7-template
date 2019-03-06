import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NavButtonComponent } from './button.nav/button.nav';
import { ButtonPointerComponent } from './button.pointer/button.pointer';
import { SmallButtonComponent } from './button.small/button.small';
import { ButtonGroupComponent } from './buttonGroup/button.group';
import { NormalButtonComponent } from './buttonNormal/normal.button';
import { HrefComponent } from './href/button.href';

// import * as button from './button';

// const a = button;

@NgModule({
  declarations: [
    NavButtonComponent,
    ButtonPointerComponent,
    SmallButtonComponent,
    ButtonGroupComponent,
    NormalButtonComponent,
    HrefComponent
  ],

  imports: [
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    NavButtonComponent,
    ButtonPointerComponent,
    SmallButtonComponent,
    ButtonGroupComponent,
    NormalButtonComponent,
    HrefComponent
  ]
})

export class ButtonModule { }
