export * from '../index';

const generations = [{ id: 0, type: '全部'}];

for (let i = 1; i <= 15; i++) {
  generations.push(
    {
      id: i,
      type: `${i}代`
    }
  );
}

export const dropDown = {
  type       : 'select',
  placeholder: '代数',
  clz        : 'form-control',
  readonly   : false,
  name       : 'level',
  notNull    : true,
  rt         : '',
  wt         : '会员等级',
  content    : generations
};
