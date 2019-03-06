import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WealEthComponent } from './weal.eth/weal.eth';
import { WealImaccComponent } from './weal.imacc/weal.imacc';
import { WealUstdComponent } from './weal.ustd/weal.ustd';
import { WealComponent } from './weal/weal';

const wealRoutes: Routes = [
  {
    path: '',
    component: WealComponent,
    children: [
      {
        path: '',
        component: WealImaccComponent
      },
      {
        path: 'wealEth',
        component: WealEthComponent
      },
      {
        path: 'wealUstd',
        component: WealUstdComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(wealRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WealRoutingModule { }
