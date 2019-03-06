import { checkPasswordFormate } from 'src/app/http';

export * from '../index';

export const accountAddFormItems = [
  {
    title: '账号',
    type: 'text',
    placeholder: '帐号',
    clz: 'form-control ',
    readonly: false,
    name: 'account',
    notNull: true,
    required: true,
    rt: '',
    wt: '账号不能为空',
    callback: () => { }
  },
  {
    title: '手机号',
    type: 'text',
    placeholder: '手机号',
    clz: 'form-control ',
    readonly: false,
    name: 'phone',
    notNull: true,
    required: true,
    rt: '',
    wt: '手机号不能为空',
    callback: () => { }
  },
  {
    title: '姓名',
    type: 'text',
    placeholder: '姓名',
    clz: 'form-control',
    readonly: false,
    name: 'username',
    notNull: false,
    required: false,
    rt: '',
    wt: '姓名为空',
    callback: (item) => {
      // this.validatePwd(item);
    }
  },
  {
    title: '身份证号',
    type: 'text',
    placeholder: '18位身份证',
    clz: 'form-control',
    readonly: false,
    name: 'idNum',
    notNull: false,
    required: false,
    rt: '',
    wt: '身份证号为空',
    callback: (item) => {
      // this.validatePwd(item);
    }
  },
  {
    title: '钱包地址',
    type: 'text',
    placeholder: '0x开头钱包地址',
    clz: 'form-control',
    readonly: false,
    name: 'wallet',
    notNull: false,
    required: false,
    rt: '',
    wt: '钱包地址为空',
    callback: (item) => {
      // this.validatePwd(item);
    }
  },
  {
    title: '密码',
    type: 'text',
    placeholder: '密码',
    clz: 'form-control',
    readonly: false,
    name: 'password',
    notNull: true,
    required: true,
    rt: '',
    wt: '密码为8-16数字密码组合',
    rule: () => { checkPasswordFormate(/^[a-zA-Z]\w{5,17}$/); },
    callback: (item) => {
    }
  },
  {
    title: '交易密码',
    type: 'text',
    placeholder: '交易密码',
    clz: 'form-control',
    readonly: false,
    name: 'payword',
    notNull: false,
    required: true,
    rt: '',
    wt: '交易密码为6位数字',
    callback: (item) => {
      // this.validatePwd(item);
    }
  },
  {
    title: '上级推荐码',
    type: 'text',
    placeholder: '推荐码',
    clz: 'form-control',
    readonly: false,
    name: 'inviteCode',
    notNull: false,
    required: true,
    rt: '',
    wt: '推荐码为空',
    callback: (item) => {
      // this.validatePwd(item);
    }
  }
];
