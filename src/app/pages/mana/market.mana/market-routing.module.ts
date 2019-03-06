import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market';
import { MarketItemComponent } from './item.list/market.item';
import { ItemUpdateComponent } from './item.update/item.update';
import { ItemAddComponent } from './item.add/item.add';
import { MarketOrderUndeliverComponent } from './order.undeliver/order.undeliver';
import { MarketOrderDeliverComponent } from './order.deliver/order.deliver';
import { MarketOrderDoneComponent } from './order.done/order.done';
import { MarketOrderDeliverDetailComponent } from './order.deliver.detail/order.deliver.detail';

const marketRoutes: Routes = [
  {
    path: '',
    component: MarketComponent,
    children: [
      {
        path: '',
        component: MarketItemComponent,
      },
      {
        path: 'addItem',
        component: ItemAddComponent,
      },
      {
        path: 'updateItem',
        component: ItemUpdateComponent,
      },
      {
        path: 'orderUndeliver',
        component: MarketOrderUndeliverComponent,
      },
      {
        path: 'orderUndeliverDetail',
        component: MarketOrderUndeliverComponent,
      },
      {
        path: 'orderDeliver',
        component: MarketOrderDeliverComponent,
      },
      {
        path: 'orderDeliverDetail',
        component: MarketOrderDeliverDetailComponent,
      },
      {
        path: 'orderDone',
        component: MarketOrderDoneComponent,
      },
      {
        path: 'orderDoneDetail',
        component: MarketOrderDoneComponent,
      },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(marketRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MarketRoutingModule { }
