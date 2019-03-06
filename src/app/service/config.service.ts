import { Injectable, Input } from '@angular/core';
import { HttpService } from '../http/http';

import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminAddData, AdminDeleteData, AdminResult, AdminUpdateData } from '../http';
import { checkReq, Config, DefaultDataFormate, HttpType, Log } from './index';

const { adminInfo, adminAdd, adminDelete, adminUpdate } = Config.apis;
const console = new Log('AdminService');

@Injectable()
export class ConfigService {
    public PASSWORD_REGEX = /^\d{6}$/;
    public ACCOUNT_REGEX = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    public NUMBER_REGEX = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
    public PASSWORD_VALIDATOR = '密码未６位存数字';
    public ACCOUNT_VALIDATOR = '账号为8-12位数字和字母组合';
    public NUMBER_VALIDATOR = '请填写正数';

    public PAGE = 'pageNo';
    public PAGE_SIZE = 'pageSize';

    constructor(private http: HttpService, private message: NzMessageService) { }
}
