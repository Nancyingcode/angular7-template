export * from '../index';

import { DefaultDropDown } from '../index';

export const accountDetailDropDown: DefaultDropDown = {
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
      id: 1,
      type: '个人详情'
    },
    {
      id: 2,
      type: '个人资产'
    },
    {
      id: 3,
      type: '好友列表'
    },
    {
      id: 4,
      type: '商务分红'
    }
  ]
};
