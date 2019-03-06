export * from '../index';

import { DefaultDropDown } from '../index';

const TODO = 'TODO';
const FAILED = 'FAILED';

export const currencyCheckDown: DefaultDropDown = {
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
      type: '待审核'
    },
    {
      id: FAILED,
      type: '审核驳回'
    }
  ]
};

export { TODO, FAILED };
