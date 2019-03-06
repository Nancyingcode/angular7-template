import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/module/component-module';
import { WealService } from '../service';
import { WealRoutingModule } from './weal-routing.module';
import { WealEthComponent } from './weal.eth/weal.eth';
import { WealImaccComponent } from './weal.imacc/weal.imacc';
import { WealUstdComponent } from './weal.ustd/weal.ustd';
import { WealComponent } from './weal/weal';

@NgModule({
  declarations: [
    WealComponent,
    WealImaccComponent,
    WealEthComponent,
    WealUstdComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    WealRoutingModule
  ],
  providers: [WealService]
})

export class WealModule { }
