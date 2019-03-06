import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isEmpty } from 'lodash';
import { NzModalService } from 'ng-zorro-antd';
import { Config } from '../config/config';
import { DefaultDataFormate, HttpType, TableProps } from '../http';
const { USER_INFO } = Config;

export function checkReq(respone: HttpType): boolean {
  if (hasOwnProperty(respone, 'code')) {
    return respone.code === 200;
  }

  return false;
}

export function checkMsg(respone: HttpType): boolean {
  return respone.msg === 'success';
}

export function checkForm(form: FormGroup): boolean {
  return form.status === 'VALID';
}

// export function getUserInfo() {
//   const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
//   return userInfo ? userInfo : '';
// }

export function setObjectToStorage(key: string, value: string | number | {}): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getObjectFromStorage(key: string): any {
  const item = sessionStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }

  return '';
}

function formStrToJson(data: string): {} {
  return JSON.parse(data);
}

export function hasOwnProperty(target: {}, prop: string): boolean {
  if (target) {
    return Object.prototype.hasOwnProperty.call(target, prop);
  }

  return false;
}

export function cutNumber(str: string): string {
  return parseFloat(str).toFixed(2);
}

export function newDate(date: string): number {
  return new Date(date).getTime();
}

export function formDate(date: number): string {
  const time = new Date(date);
  const [year, month, day, hour, min, sec] =
    [time.getFullYear(), time.getMonth() + 1, time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds()];
  let   arrNYR: string[] | number[] = [year, month, day];
  let   arrSFM: string[] | number[] = [hour, min, sec];
  arrNYR                      = arrNYR.map(item => (digit(item)));
  arrSFM                      = arrSFM.map(item => (digit(item)));
  const arrNYRStr                   = arrNYR.join('-');
  const arrSFMStr                   = arrSFM.join(':');
  return arrNYRStr;
}

export function formDateYtoS(date: number | string): string {
  const time = new Date(date);
  const [year, month, day, hour, min, sec] =
    [time.getFullYear(), time.getMonth() + 1, time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds()];
  let   arrNYR: string[] | number[] = [year, month, day];
  let   arrSFM: string[] | number[] = [hour, min, sec];
  arrNYR                      = arrNYR.map(item => (digit(item)));
  arrSFM                      = arrSFM.map(item => (digit(item)));
  const arrNYRStr                   = arrNYR.join('-');
  const arrSFMStr                   = arrSFM.join(':');
  return `${arrNYRStr} ${arrSFMStr}`;
}

function digit(num: number): string {
  return num > 9 ? num.toString() : '0' + num;
}

/**
 *
 * @param form formGroup
 * check if do submit and form is undirty
 */
export function checkUndirtyForm(form: FormGroup): void {
  for (const i in form.controls) {
    if (form.controls.hasOwnProperty(i)) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
  }
}

export function showConfirm(title: string, body: string, modalService: NzModalService, callback: () => void): void {
  modalService.confirm({
    nzOkLoading: false,
    nzTitle: title,
    nzContent: body,
    nzOnOk: () => new Promise((resolve) => {
      window.setTimeout(() => {
        callback();
        resolve();
      }, 1000);
    })
  });
}

export function  checkRePwd(firstPasswd: string, secondPasswd: string): ValidatorFn {
  return (control: FormGroup): ValidationErrors | null => {
    const newLoginPwd = control.get(firstPasswd).value;
    const rePwd = control.get(secondPasswd).value;
    console.log(newLoginPwd, rePwd);
    return newLoginPwd && rePwd && newLoginPwd === rePwd ? null : { 'identityRevealed': true, 'text': '密码不匹配' };
  };
}

export const checkPasswordFormate = (nameRe: RegExp): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? null : {'forbiddenName': {value: control.value}};
  };
};

export const checkFormate = (nameRe: RegExp, text?: string): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (isEmpty(control.value)) {
      return null;
    }

    const forbidden = nameRe.test(control.value);
    return forbidden ? null : {'text': `${text}`};
  };
};

export const checkUpload = (result: string) => {
  switch (result) {
    case 'success': {
      return true;
    }

    case 'failed': {
      return false;
      break;
    }

    case 'send': {
      return false;
      break;
    }

    case 'failed': {
      return false;
      break;
    }

    default: {
      return false;
    }
  }
};
