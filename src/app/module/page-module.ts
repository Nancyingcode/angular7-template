import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from '../module/component-module';
import { LoginComponent } from '../pages/login/login';
import { AccountInviterComponent } from '../pages/mana/account.mana/account.info/account.detail/inviter/inviter';
import { AccountOrderDetailComponent } from '../pages/mana/account.mana/account.info/account.detail/orders/detail/order.detail';
import { WealUpdateComponent } from '../pages/mana/account.mana/weal.update/weal.update';
import { ManaComponent } from '../pages/mana/mana';
import { NodeListComponent } from '../pages/mana/node.mana/node.list/node.list';
import { NodeManaComponent } from '../pages/mana/node.mana/node.mana';
import { NodeReqListComponent } from '../pages/mana/node.mana/node.req.list/node.req.list';
import { PageNotFoundComponent } from '../pages/page.not.found/page.not.found';

@NgModule({
  declarations: [
    LoginComponent,
    ManaComponent,
    AccountInviterComponent,
    WealUpdateComponent,
    AccountOrderDetailComponent,
    NodeManaComponent,
    NodeListComponent,
    NodeReqListComponent,
    PageNotFoundComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ComponentModule
  ],
  exports: [
    LoginComponent,
    ManaComponent,
    AccountInviterComponent,
    WealUpdateComponent,
    AccountOrderDetailComponent,
    NodeManaComponent,
    NodeListComponent,
    NodeReqListComponent,
    ComponentModule,
    PageNotFoundComponent,
    ReactiveFormsModule
  ]
})
export class PageModule { }
