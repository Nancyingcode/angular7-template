import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WysiwygComponent } from './wysiwyg';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [ WysiwygComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule , CKEditorModule ],
  exports: [ WysiwygComponent ],
  providers: []
})

export class WysiwygModule {}
