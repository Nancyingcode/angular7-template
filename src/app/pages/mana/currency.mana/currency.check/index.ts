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
      id: '',
      type: '全部'
    },
    {
      id: '３',
      type: '待审核'
    },
    {
      id: '驳回',
      type: '待定'
    },
    {
      id: '取消',
      type: '成功'
    },
    {
      id: '失败',
      type: '失败'
    }
  ]
};
