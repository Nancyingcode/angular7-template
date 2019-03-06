export * from '../index';

export const dropDown = {
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
      type: '提现'
    },
    {
      id: 0,
      type: '充值'
    }
  ]
};
