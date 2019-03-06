import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RuleModifyComponent, RuleModifyRecordComponent, SystemComponent, TotalComponent } from './system';

const systemRoutes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'ruleModify',
        component: RuleModifyComponent
      },
      {
        path: 'ruleModifyRecord',
        component: RuleModifyRecordComponent
      },
      {
        path: 'total',
        component: TotalComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(systemRoutes)
  ],

  exports: [
    RouterModule
  ]
})

export class SystemRoutingModule { }
