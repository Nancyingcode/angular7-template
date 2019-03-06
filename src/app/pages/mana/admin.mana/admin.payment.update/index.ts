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

export const payment: FormItem[] = [
  {
    title: '银行',
    type: 'text',
    placeholder: '银行',
    clz: 'form-control',
    readonly: false,
    name: 'bank',
    required: true,
    rt: '',
    wt: '银行不能为空'
  },
  {
    title: '开户行',
    type: 'text',
    placeholder: '开户行',
    clz: 'form-control',
    readonly: false,
    name: 'openBank',
    required: true,
    rt: '',
    wt: '开户行不能为空'
  },
  {
    title: '开户名称',
    type: 'text',
    placeholder: '开户名称',
    clz: 'form-control',
    readonly: false,
    name: 'name',
    required: true,
    rt: '',
    wt: '开户名称不能为空'
  },
  {
    title: '银行卡',
    type: 'number',
    placeholder: '银行卡',
    clz: 'form-control',
    readonly: false,
    name: 'bankCard',
    required: true,
    rt: '',
    wt: '银行卡不能为空'
  }
];
