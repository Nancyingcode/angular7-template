import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../pages/login/login';
import { TableComponent } from '../component/table/table';
import { HomeComponent } from '../pages/home/home';
import { DemoComponent } from '../pages/demo/demo';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'demo', component: DemoComponent },
  {
    path: 'user-mana',
    loadChildren: './user.mana/user.mana.module#UserManaModule',
    data: { preload: true }
  },
  {
    path: 'sys-mana',
    loadChildren: './system.mana/system.mana.module#SystemManaModule',
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
