import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentModule } from '../../../module';
import { SystemService } from './service';
import { RuleModifyComponent, RuleModifyRecordComponent, SystemComponent, TotalComponent } from './system';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  declarations: [ RuleModifyComponent, RuleModifyRecordComponent, TotalComponent, SystemComponent ],
  exports: [ RuleModifyComponent, RuleModifyRecordComponent, TotalComponent, SystemComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, ComponentModule, SystemRoutingModule ],
  providers: [ SystemService ]
})

export class SystemModule {}
