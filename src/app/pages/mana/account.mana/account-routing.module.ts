import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
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
import { AccountAddComponent } from './account.add/account.add';
import { WealUpdateComponent } from './weal.update/weal.update';

const accountRoutes: Routes = [
  {
    path: '',
    component: AccountManaComponent,
    children: [
      { path: '', component: AccountInfoComponent },
      {
        path: 'wealInfo',
        component: AccountWealInfoComponent
      },
      {
        path: 'check',
        component: AccountCheckComponent
      },
      {
        path: 'addAccount',
        component: AccountAddComponent
      },
      {
        path: 'wealUpdate',
        component: WealUpdateComponent
      },
      {
        path: 'wealModify',
        component: AccountWealModifyComponent
      },
      {
        path: 'levelModify',
        component: AccountLevelModifyComponent
      },
      {
        path: 'incomeInfo',
        component: AccountIncomeInfoComponent,
        data: { type: 2 }
      },
      {
        path: 'backIncomeInfo',
        component: AccountIncomeInfoComponent,
        data: { type: 3 }
      },
      {
        path: 'extraIncomeInfo',
        component: AccountIncomeInfoComponent,
        data: { type: 1 }
      },
      {
        path: 'info',
        component: AccountInfoComponent
      },
      {
        path: 'accountDetail',
        component: AccountDetailCenterComponent
      },
      {
        path: 'update',
        component: AccountUpdateComponent
      },
      {
        path: 'transfer',
        component: AccountTransferComponent,
        children: [
          {
            path: 'in',
            component: AccountTransferInComponent
          },
          {
            path: 'out',
            component: AccountTransferOutComponent
          }
        ]
      },
      {
        path: 'exchangeInfo',
        component: AccountExchangeInfoComponent
      },
      {
        path: 'rechargeInfo',
        component: AccountRechargeComponent
      },
      {
        path: 'drawInfo',
        component: AccountDrawComponent
      },
      {
        path: 'relationInfo',
        component: AccountRelationInfoComponent
      },
      {
        path: 'relationDetail',
        component: AccountRelationDetailComponent
      },
      {
        path: 'paymentInfo',
        component: AccountPaymentInfoComponent
      },
      //  理财记录
      {
        path: 'orderListInfo',
        component: AccountOrderListComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
