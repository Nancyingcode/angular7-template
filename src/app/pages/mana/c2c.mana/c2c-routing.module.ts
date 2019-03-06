import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { C2cComponent, C2cDoneComponent, C2cSellingComponent } from './c2c';

const c2cRoutes = [
  {
    path: '',
    component: C2cComponent,
    children: [
      {
        path     : 'done',
        component: C2cDoneComponent
      },
      {
        path     : 'selling',
        component: C2cSellingComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forChild(c2cRoutes) ],
  exports: [ RouterModule ],
  providers: []
})

export class C2cRootingModule {}
