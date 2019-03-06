import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselComponent, CarouselListComponent } from './carousel';

const carouselRoutes: Routes = [
  {
    path: '',
    component: CarouselComponent,
    children: [
      {
        path: '',
        component: CarouselListComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(carouselRoutes)
  ],

  exports: [
    RouterModule
  ]
})

export class CarouselRoutingModule { }
