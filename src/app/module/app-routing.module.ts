import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { ManagerComponent } from '../pages/user/manager';
import { LoginComponent } from '../pages/login/login';
import { TableComponent } from '../component/table/table';
import { AccountManaComponent } from '../pages/userMana/acountMana/account.mana';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'user-manager', component: ManagerComponent, children: [
      {
        path: 'account-mana',
        component: AccountManaComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'data-table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
