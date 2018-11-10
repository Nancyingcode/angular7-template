import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Log } from '../../tools/console';
import { checkForm } from '../../tools/tools';
import { Router } from '@angular/router';
import { Config } from '../../config/config';
const console = new Log('LoginComponent');
const { userM } = Config.userMana;

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.less'],
    animations: []
})


@Injectable()
export class LoginComponent {
    public jumper = '../../../assets/pic/login-jumper.png';
    public items = [
        {
            title: '账号:',
            placeholder: '',
            type: 'text',
            label: '用户名',
            name: 'account',
            wt: '账户不为空',
        },
        {
            title: '密码:',
            placeholder: '',
            type: 'password',
            label: '密码',
            name: 'loginPwd',
            wt: '请输入密码',
        }
    ];
    loginForm = this.fb.group({
        account: ['', Validators.required],
        loginPwd: ['', Validators.required],
    });
    public loginBtn = '登录';
    public title = '后台管理页面';
    constructor(private fb: FormBuilder, private ls: LoginService, private router: Router) { }

    async submit() {
        if (!checkForm(this.loginForm)) { return; }
        const data = this.getFormInfo();
        const res = await this.ls.login(data);
        if (!res) { return; }
        this.router.navigate(['/home']);
    }

    getFormInfo() {
        return this.loginForm.value;
    }
}
