import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/module/component-module';
import { AdminService } from '../service';
import {
  AdminAddComponent,
  AdminInfoComponent,
  AdminManaComponent,
  AdminUpdataComponent
 } from './admin';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPaymentInfoComponent } from './admin.payment.info/admin.payment.info';
import { AdminPaymentUpdataComponent } from './admin.payment.update/admin.payment.update';

@NgModule({
  declarations   : [ AdminManaComponent, AdminInfoComponent, AdminAddComponent, AdminUpdataComponent, AdminPaymentInfoComponent, AdminPaymentUpdataComponent ],
  exports        : [ AdminManaComponent, AdminInfoComponent, AdminAddComponent, AdminUpdataComponent, AdminPaymentInfoComponent, AdminPaymentUpdataComponent ],
  imports        : [ CommonModule, FormsModule, AdminRoutingModule, ComponentModule ],
  providers      : [ AdminService ],
  entryComponents: [ AdminPaymentUpdataComponent, AdminAddComponent, AdminUpdataComponent ]
})

export class AdminModule { }
