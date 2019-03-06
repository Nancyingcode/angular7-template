import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeViewComponent } from './tree.view/tree.view';

@NgModule({
  declarations: [ TreeViewComponent ],
  exports     : [ TreeViewComponent ],
  imports     : [ CommonModule ],
})

export class TreeModule {}