import { NgModule } from '@angular/core';
import { AccountService } from '../service/account.service';
import { AdminService } from '../service/admin.service';
// import { RegisterService } from '../service/register.service';


@NgModule({
    providers: [
        AccountService,
        AdminService
    ]
})
export class ServiceModule { }
