import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentModule } from '../../../module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [OrderComponent, OrderListComponent],
  exports     : [OrderComponent, OrderListComponent],
  imports     : [ CommonModule, ComponentModule, FormsModule, ReactiveFormsModule, OrderRoutingModule ],
  providers   : []
})

export class OrderModule {}
