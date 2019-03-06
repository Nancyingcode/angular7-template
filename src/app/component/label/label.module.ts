import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormLabelComponent } from './form.label/form.label';
import { IconStarComponent } from './icon.star/icon';
import { LoginLabelCodeComponent } from './label.code/label.code';
import { LoginLabelComponent } from './label.input/label.input';

@NgModule({
  declarations: [ FormLabelComponent, IconStarComponent, LoginLabelComponent, LoginLabelCodeComponent],
  exports: [ FormLabelComponent, IconStarComponent, LoginLabelComponent, LoginLabelCodeComponent],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  providers: []
})
export class LabelModule {}
