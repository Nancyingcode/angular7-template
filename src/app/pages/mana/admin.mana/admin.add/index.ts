export * from '../index';

import { adminLevel } from '../index';

function getAdminDropDown(): any[] {
  const arr: any = [];
  for (const key in adminLevel) {
    if (key) {
      arr.push({ id: key, type: adminLevel[key]});
    }
  }

  return arr;
}

const adminDropDown = getAdminDropDown();

export const adminAddItem = [
  {
    title: '账号',
    type: 'text',
    placeholder: '帐号',
    clz: 'form-control ',
    readonly: false,
    name: 'account',
    required: true,
    rt: '',
    wt: '账号不为空',
    callback: () => { }
  },
  {
    title: '真实姓名',
    type: 'text',
    placeholder: '用户名',
    clz: 'form-control ',
    readonly: false,
    name: 'username',
    required: true,
    rt: '',
    wt: '真实姓名不能为空',
    callback: () => { }
  },
  {
    title: '密码',
    type: 'password',
    placeholder: '密码',
    clz: 'form-control',
    readonly: false,
    name: 'adminPassword',
    required: true,
    rt: '',
    wt: '密码不为空',
    callback: (item) => {
      // this.validatePwd(item);
    }
  },
  {
    title: '确定',
    type: 'password',
    placeholder: '确认密码',
    clz: 'form-control',
    readonly: false,
    name: 'confirmPassword',
    required: true,
    rt: '',
    wt: '密码不为空',
    callback: (item) => {
      // this.validatePwd(item);
    }
  },
  {
    title: '管理员等级',
    type: 'select',
    placeholder: '等级',
    clz: 'form-control',
    readonly: false,
    name: 'type',
    content: adminDropDown,
    required: true,
    rt: '',
    wt: '请选择管理员属性',
    callback: (item) => {
      // this.validatePwd(item);
    }
  }
];
