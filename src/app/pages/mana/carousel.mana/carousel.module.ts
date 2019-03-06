import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../../module';
import { CarouselService } from '../service';
import { CarouselListComponent } from './carousel-list/carousel-list.component';
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [ CarouselComponent, CarouselListComponent ],
  exports: [ CarouselComponent, CarouselListComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, ComponentModule, CarouselRoutingModule ],
  providers: [ CarouselService ]
})

export class CarouselModule {}
