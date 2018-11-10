import { Component, Injectable, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Config } from '../../../../config/config';
import { AdminService } from 'src/app/service/admin.service';
import { ToastService } from 'src/app/service/toast.service';
import { TextToastComponent } from 'src/app/component/toast/textToast/text.toast';
import { createCustomElement } from '@angular/elements';
const { adminI } = Config.userMana;


@Component({
    selector: 'app-admin-update',
    templateUrl: './admin.update.html',
    styleUrls: ['./admin.update.less']
})

@Injectable()
export class AdminUpdataComponent implements OnInit {

    public isForm = false;
    public text = '密码不匹配';
    public props = {
        alert: ['管理员管理', '添加管理员'],
        callback: this.go
    };
    public buttons = [{
        name: '提交',
        type: 'submit',
        callback: function () { }
    }, {
        name: '返回',
        type: 'button',
        callback: this.go
    }];
    public list = [
        {
            title: '账户',
            type: 'text',
            placeholder: 'Username',
            clz: 'form-control-plaintext ',
            readonly: true,
            name: 'account',
            rt: '',
            wt: '用户名格式不正确'
        }, {
            title: '旧密码',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'oldPwd',
            rt: '',
            wt: '密码格式不正确'
        }, {
            title: '新密码',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'newPwd',
            rt: '',
            wt: '密码格式不正确'
        }, {
            title: '确定',
            type: 'password',
            placeholder: 'Password',
            clz: 'form-control',
            readonly: false,
            name: 'rePwd',
            rt: '',
            wt: '密码不匹配'
        }];
    public adminUForm = this.fb.group({
        account: [''],
        oldPwd: ['', Validators.required],
        newPwd: ['', Validators.required],
        rePwd: ['', Validators.required]
    });
    constructor(private router: Router, private fb: FormBuilder
        , private as: AdminService, injector: Injector, public toasts: ToastService, private route: ActivatedRoute) {
        const ToastElement = createCustomElement(TextToastComponent, { injector });
        customElements.define('popup-element', ToastElement);
    }

    async ngOnInit() {
        await this.setForm();
        console.log(location.pathname);
    }

    async update(item: any) {
        if (this.checkRePwd()) { return; }
        const { account, oldPwd, newPwd } = item;
        const data = { account, oldPwd, newPwd };
        return await this.as.updateManager(data);
    }

    go(router: Router) {
        router.navigate(['../']);
    }

    checkRePwd() {
        const { newPwd, rePwd } = this.adminUForm.value;
        return newPwd === rePwd;
    }

    async setForm() {
        const res = await this.getAccount();
        this.adminUForm.patchValue({
            account: res
        });
    }

    async getAccount() {
        return this.route.snapshot.paramMap.get('account');
    }

    setDefault() { }

    validate() {
        if (this.checkRePwd()) { return; }
    }

    show() {
        this.toasts.showToast('提示', '密码不匹配', function () {
            console.log('ok');
        }, function () {
            console.log('cancel');
        });
    }

    async submit() {
        if (!this.checkRePwd()) {
            this.show();
            return;
        }
        const res = await this.as.updateManager(this.adminUForm.value);
    }
}
