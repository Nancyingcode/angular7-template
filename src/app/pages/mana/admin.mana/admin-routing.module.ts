import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AdminAddComponent,
  AdminInfoComponent,
  AdminManaComponent,
  AdminPaymentInfoComponent,
  AdminUpdataComponent
 } from './admin';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminManaComponent,
    children: [
      {
        path     : '',
        component: AdminInfoComponent
      },
      {
        path     : 'add',
        component: AdminAddComponent
      },
      {
        path     : 'update',
        component: AdminUpdataComponent
      },
      {
        path     : 'payment',
        component: AdminPaymentInfoComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],

  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
