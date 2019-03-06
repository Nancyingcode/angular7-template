import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { ComponentModule } from 'src/app/module/component-module';
import {
  AccountAddComponent,
  AccountCheckComponent,
  AccountDetailCenterComponent,
  AccountDetailTabComponent,
  AccountDrawComponent,
  AccountExchangeInfoComponent,
  AccountIncomeInfoComponent,
  AccountInfoComponent,
  AccountInviterComponent,
  AccountLevelModifyComponent,
  AccountManaComponent,
  AccountOrderListComponent,
  AccountPaymentInfoComponent,
  AccountRechargeComponent,
  AccountRelationDetailComponent,
  AccountRelationInfoComponent,
  AccountSingleDetailComponent,
  AccountTransferComponent,
  AccountTransferInComponent,
  AccountTransferOutComponent,
  AccountUpdateComponent,
  AccountWealInfoComponent,
  AccountWealModifyComponent,
  TabService
 } from './account';
import { AccountRoutingModule } from './account-routing.module';
import { AccountWsbcComponent } from './account-wsbc/account-wsbc.component';
import { AccountCheckDetailComponent } from './account.check/template/detail';
import { AccountDrawerDetailComponent } from './account.detail/account.detail.compoent';
import { TransferTabService } from './account.transfer/tab.service';
import { WealUpdateComponent } from './weal.update/weal.update';

@NgModule({
  declarations: [
    AccountWealInfoComponent,
    AccountIncomeInfoComponent,
    AccountInfoComponent,
    AccountTransferComponent,
    AccountTransferInComponent,
    AccountTransferOutComponent,
    AccountExchangeInfoComponent,
    AccountDrawComponent,
    AccountRechargeComponent,
    AccountWealModifyComponent,
    AccountLevelModifyComponent,
    AccountRelationInfoComponent,
    AccountRelationDetailComponent,
    AccountPaymentInfoComponent,
    AccountUpdateComponent,
    AccountSingleDetailComponent,
    AccountOrderListComponent,
    AccountDetailTabComponent,
    AccountDetailCenterComponent,
    AccountCheckComponent,
    AccountManaComponent,
    AccountDrawerDetailComponent,
    AccountCheckDetailComponent,
    AccountAddComponent,
    AccountWsbcComponent
  ],

  imports: [
    DirectiveModule,
    ComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],

  entryComponents: [
    AccountAddComponent,
    AccountDetailCenterComponent,
    AccountSingleDetailComponent,
    AccountWealInfoComponent,
    AccountIncomeInfoComponent,
    AccountOrderListComponent,
    AccountInviterComponent,
    AccountTransferComponent,
    AccountTransferInComponent,
    AccountTransferOutComponent,
    AccountDrawerDetailComponent,
    AccountCheckDetailComponent,
    AccountWsbcComponent,
    WealUpdateComponent
  ],

  providers: [TabService, TransferTabService]
})

export class AccountModule { }
