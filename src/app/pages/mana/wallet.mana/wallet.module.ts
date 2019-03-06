import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { ComponentModule } from 'src/app/module/component-module';
import { WalletService } from '../service';
import { WalletTabService } from './tab.service';
import { WalletBuyComponent, WalletComponent, WalletExchangeComponent, WalletReBuyComponent } from './wallet';
import { WalletRoutingModule } from './wallet-routing.module';

@NgModule({
  declarations: [WalletComponent, WalletBuyComponent, WalletReBuyComponent, WalletExchangeComponent],
  exports: [WalletComponent, WalletBuyComponent, WalletReBuyComponent, WalletExchangeComponent],
  imports: [CommonModule, DirectiveModule, FormsModule, ReactiveFormsModule, WalletRoutingModule, ComponentModule],
  providers: [WalletService, WalletTabService],
  entryComponents: [ WalletBuyComponent, WalletReBuyComponent ]
})

export class WalletModule { }
