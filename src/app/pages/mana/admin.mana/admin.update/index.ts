export * from '../index';

import { adminLevel, DropDown, FormItem } from '../index';

function getAdminDropDown(): any {
  const arr: any = [];
  for (const key in adminLevel) {
    if (key) {
      arr.push({ id: key, type: adminLevel[key]});
    }
  }

  return arr;
}

const adminDropDown = getAdminDropDown();

export const admins: FormItem[] = [
  {
    title: '账户',
    type: 'text',
    placeholder: '账号',
    clz: 'form-control-plaintext ',
    readonly: true,
    name: 'account',
    required: true,
    rt: '',
    wt: '账户为空'
  },
  {
    title: '新密码',
    type: 'password',
    placeholder: '新密码',
    clz: 'form-control',
    readonly: false,
    name: 'newPassword',
    required: true,
    rt: '',
    wt: '密码不匹配'
  },
  {
    title: '确定',
    type: 'password',
    placeholder: '新密码确认',
    clz: 'form-control',
    readonly: false,
    name: 'confirmPassword',
    required: true,
    rt: '',
    wt: '密码不匹配'
  }
  // {
  //   title: '管理员等级',
  //   type: 'select',
  //   placeholder: '密码',
  //   clz: 'form-control',
  //   readonly: true,
  //   name: 'type',
  //   content: adminDropDown,
  //   required: true,
  //   rt: '',
  //   wt: '请选择管理员属性',
  //   callback: () => {}
  // }
];
