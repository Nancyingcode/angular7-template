export * from '../index';

import { Config } from '../index';
const {inputLogin, inputPassword} = Config.images;

export const loginItems = [
  {
    img: inputLogin,
    title: '账号:',
    placeholder: '你的帐号或手机号',
    type: 'text',
    label: '用户名',
    name: 'username',
    hidden: false,
    wt: '账户不能为空',
    validate: () => { }
  },
  {
    img: inputPassword,
    title: '密码:',
    placeholder: '密码',
    type: 'password',
    label: '密码',
    name: 'password',
    hidden: false,
    wt: '请输入密码',
    validate: () => { }
  },
  {
    img: inputPassword,
    title: '验证码:',
    placeholder: '验证码',
    type: 'number',
    label: '验证码',
    name: 'code',
    hidden: true,
    wt: '请输入验证码',
    validate: () => { }
  }
];
