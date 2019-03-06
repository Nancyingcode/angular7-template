import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerComponent } from './container';
import { InlineContainerComponent } from './inline.container';

@NgModule({
  declarations: [ ContainerComponent, InlineContainerComponent ],
  exports: [ ContainerComponent, InlineContainerComponent ],
  imports: [ CommonModule ],
  providers: []
})

export class ContainerModule {}
