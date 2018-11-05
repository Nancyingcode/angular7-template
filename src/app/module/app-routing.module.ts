import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../pages/login/login';
import { TableComponent } from '../component/table/table';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'admin-mana', component: ManagerComponent },
  {
    path: 'user-mana',
    loadChildren: './user.mana/user.mana.module#UserManaModule',
    data: { preload: true }
  },
  { path: 'login', component: LoginComponent },
  { path: 'data-table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
