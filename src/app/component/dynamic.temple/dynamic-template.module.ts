import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { LabelModule } from '../label/label.module';
import { UploadModule } from '../upload/upload.module';

import { ValidatorModule } from '../validate/validator.module';
import { FormButtonDynamicComponent } from './form-button.dynamic/form-button.dynamic';
import { DynamicFormItemComponent } from './form.dynamic/form.dynamic';

@NgModule({
  declarations: [FormButtonDynamicComponent, DynamicFormItemComponent],
  exports: [FormButtonDynamicComponent, DynamicFormItemComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    UploadModule,
    InputModule,
    ValidatorModule,
    LabelModule
  ],
  providers: []
})

export class DynamicTemplateModule { }
