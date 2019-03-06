import { Component, Injectable, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd';
import { LoginService } from 'src/app/service/login.service';
import { FormGroupService } from '../service';
import {
  checkForm,
  checkUndirtyForm,
  loginItems,
  Config,
  Log, NormalButton
} from './index';
const console = new Log('LoginComponent');
const { userM } = Config.userMana;
const { images } = Config;

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.less'],
  animations: [],
  encapsulation: ViewEncapsulation.None
})

@Injectable()
export class LoginComponent {
  public isLoading: boolean;
  public isClick: boolean;
  public loginBtn: string;
  public title: string;
  public jumper: string;
  public items: any[];
  public loginForm: FormGroup;
  public codeButton: NormalButton;
  innerHtml: string;

  constructor(
    private ls: LoginService,
    private router: Router,
    private fgs: FormGroupService,
    private message: NzMessageService) {
    this.isLoading = false;
    this.jumper = images.jumper;
    this.innerHtml = `<button>innnerHtml</button>`;
    this.title = '金字塔管理系统';
    this.loginBtn = '登录';
    this.items = loginItems;

    this.loginForm = this.fgs.toFormGroup(loginItems);

    this.codeButton = {
      name: '验证码',
      type: 'button',
      style: 'primary-code',
      callback: () => { }
    };
  }

  submit(): void {
    const data = this.getFormInfo();
    this.ls.login(data).subscribe((res: boolean) => {
      if (res) {
        this.message.success('登录成功');
        this.router.navigate([userM]);
        return;
      }

      this.message.error('服务器可能异常，请稍后再试');
    });

  }

  loadSubmit(): void {
    if (!checkForm(this.loginForm)) {

      // 如果表单没有操作过，让其变为已操作dirty
      checkUndirtyForm(this.loginForm);
      return;
    }

    this.isLoading = true;
    this.submit();

    setTimeout(() => {
      this.isLoading = false;
    }, 5000);

  }

  timeout(time: number): Promise<any> {
    return new Promise((resolve) =>
      setTimeout(() => {
        this.isLoading = false;
        resolve();
      }, time));
  }

  getFormInfo(): any { return this.loginForm.value; }

  isHidden(item: any): boolean {
    return item.hidden && item.name === 'code';
  }

  /**
   * 验证码输入
   */
  setCodeStatus(): void {
    this.items[2].hidden = false;
    this.loginForm.controls.code.setValidators([Validators.required]);
    this.loginForm.controls.code.markAsDirty();
    this.loginForm.controls.code.updateValueAndValidity();
  }
}
