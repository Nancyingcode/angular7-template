import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplyDetailComponent } from './reply.detail/reply.detail';
import { ReplyListComponent } from './reply.list/reply.list';
import { ReplyComponent } from './reply/reply';

const replyRoutes: Routes = [
  {
    path: '',
    component: ReplyComponent,
    children: [
      {
        path: '',
        component: ReplyListComponent
      },
      {
        path: 'detail',
        component: ReplyDetailComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(replyRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ReplyRoutingModule { }
