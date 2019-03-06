export * from '../index';

import { DefaultDropDown } from '../index';

const TODO = 'TODO';
const FAILED = 'FAILED';

export const currencyRequestDropDown: DefaultDropDown = {
  type       : 'select',
  placeholder: '类型',
  clz        : 'form-control',
  readonly   : false,
  name       : 'level',
  notNull    : true,
  rt         : '',
  wt         : '订单类型',
  content    : [
    {
      id: TODO,
      type: '申述中'
    },
    {
      id: FAILED,
      type: '申述失败'
    }
  ]
};

export { TODO, FAILED };
