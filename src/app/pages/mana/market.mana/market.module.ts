import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/module/component-module';
import { MarketService } from '../service';
import { ItemAddComponent } from './item.add/item.add';
import { MarketItemComponent } from './item.list/market.item';
import { ItemUpdateComponent } from './item.update/item.update';
import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market/market';
import { MarketOrderDeliverDetailComponent } from './order.deliver.detail/order.deliver.detail';
import { MarketOrderDeliverComponent } from './order.deliver/order.deliver';
import { MarketOrderDoneDetailComponent } from './order.done.detail/order.done.detail';
import { MarketOrderDoneComponent } from './order.done/order.done';
import { MarketOrderUndeliverDetailComponent } from './order.undeliver.detail/order.undeliver.detail';
import { MarketOrderUndeliverComponent } from './order.undeliver/order.undeliver';

@NgModule({
  declarations: [
    MarketComponent,
    MarketItemComponent,
    ItemAddComponent,
    ItemUpdateComponent,
    MarketOrderUndeliverComponent,
    MarketOrderDeliverComponent,
    MarketOrderDoneComponent,
    MarketOrderDoneDetailComponent,
    MarketOrderDeliverDetailComponent,
    MarketOrderUndeliverDetailComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    MarketRoutingModule
  ],
  providers: [MarketService]
})

export class MarketModule { }
