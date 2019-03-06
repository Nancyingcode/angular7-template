import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormValidateComponent } from './form.validate';
import { LoginValidateComponent } from './validate';

@NgModule({
  declarations: [ LoginValidateComponent, FormValidateComponent ],
  exports: [ LoginValidateComponent, FormValidateComponent ],
  imports: [ CommonModule ],
  providers: []
})
export class ValidatorModule {}
