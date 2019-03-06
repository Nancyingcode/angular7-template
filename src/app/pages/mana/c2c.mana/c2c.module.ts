import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentModule } from 'src/app/module/component-module';
import { C2cComponent, C2cDoneComponent, C2cSellingComponent } from './c2c';
import { C2cRootingModule } from './c2c-routing.module';
import { C2cService } from './c2c.service';

@NgModule({
  declarations: [ C2cComponent, C2cDoneComponent, C2cSellingComponent ],
  exports     : [ C2cComponent, C2cDoneComponent, C2cSellingComponent ],
  imports     : [ CommonModule, ComponentModule, C2cRootingModule ],
  providers   : [ C2cService ]
})

export class C2cModule {}
