import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';

const orderRoutes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        component: OrderListComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],

  exports: [
    RouterModule
  ]
})

export class OrderRoutingModule { }
