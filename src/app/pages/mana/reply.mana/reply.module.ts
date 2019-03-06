import { NgModule } from '@angular/core';
import { ComponentModule } from 'src/app/module/component-module';
import { ReplyListComponent } from './reply.list/reply.list';
import { ReplyComponent } from './reply/reply';
import { ReplyRoutingModule } from './reply-routing.module';
import { ReplyDetailComponent } from './reply.detail/reply.detail';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ReplyComponent,
    ReplyListComponent,
    ReplyDetailComponent
  ],
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReplyRoutingModule
  ]
})

export class ReplyModule { }
