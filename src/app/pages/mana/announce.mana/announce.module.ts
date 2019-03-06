import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentModule } from '../../../module';
import { AnnounceAddComponent, AnnounceComponent, AnnounceListComponent, AnnounceUpdateComponent } from './announce';
import { AnnounceRoutingModule } from './announce-routing.module';

@NgModule({
  declarations: [ AnnounceComponent, AnnounceListComponent, AnnounceAddComponent, AnnounceUpdateComponent ],
  exports: [ AnnounceComponent, AnnounceListComponent, AnnounceAddComponent, AnnounceUpdateComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, ComponentModule, AnnounceRoutingModule ],
  entryComponents: [ AnnounceAddComponent ],
  providers: []
})

export class AnnounceModule {}
