import { NgModule } from '@angular/core';
import { CarouselService, GameService, InvestService } from '../pages';
import { AnnounceService, MarketService, ReplyService } from '../service';
import { AccountService } from '../service/account.service';
import { AdminService } from '../service/admin.service';
import { ConfigService } from '../service/config.service';
import { FormGroupService } from '../service/form.service';
import { HomeService } from '../service/home.service';
import { LineUpService } from '../service/line-up.service';
import { NodeService } from '../service/node.service';

@NgModule({
  providers: [
    AccountService,
    AdminService,
    HomeService,
    NodeService,
    MarketService,
    ReplyService,
    FormGroupService,
    AnnounceService,
    GameService,
    CarouselService,
    InvestService,
    LineUpService
  ]
})

export class ServiceModule { }
