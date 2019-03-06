import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnounceAddComponent, AnnounceComponent, AnnounceListComponent, AnnounceUpdateComponent } from './announce';

const announceRoutes: Routes = [
  {
    path: '',
    component: AnnounceComponent,
    children: [
      {
        path: '',
        component: AnnounceListComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(announceRoutes)
  ],

  exports: [
    RouterModule
  ],

  entryComponents: [
    AnnounceAddComponent,
    AnnounceUpdateComponent
  ]
})

export class AnnounceRoutingModule { }
