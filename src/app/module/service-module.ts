import { NgModule } from '@angular/core';
import { AccountService } from '../service/account.service';
import { AdminService } from '../service/admin.service';
import { HomeService } from '../service/home.service';
import { InvitationService } from '../service/invitaion.service';
import { MarketService } from '../service/market.service';
import { MineService } from '../service/mine.service';
// import { RegisterService } from '../service/register.service';


@NgModule({
    providers: [
        AccountService,
        AdminService,
        HomeService,
        InvitationService,
        MarketService,
        MineService
    ]
})
export class ServiceModule { }
