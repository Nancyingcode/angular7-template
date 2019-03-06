export * from '../index';

export const deviceStatus = {
  0: '关机',
  1: '开机',
  2: '已到期(未续费)',
  3: '已到期(停止使用)'
};

export function getMonths(): any {
  const obj = [];
  for (let i = 1; i <= 12; i++) {
    const mon = 12 + 1 - i;
    obj.push({ id: mon, type: `${mon}月总购买`});
  }

  return obj;
}

function getLimitMonths(): any {
  const obj = [];
  const month = new Date().getMonth() + 1;
  for (let i = 1; i <= month; i++) {
    const mon = month + 1 - i;
    obj.push({ id: mon, type: `${mon}月总购买` });
  }

  return obj;
}

export const months = {
  type       : 'select',
  placeholder: '类型',
  clz        : 'form-control',
  readonly   : false,
  name       : 'level',
  notNull    : true,
  rt         : '',
  wt         : '订单类型',
  content    : getLimitMonths()
};

function getYears(): any {
  const obj = [];
  const year = new Date().getFullYear();
  for (let i = 1; i <= year - 1970; i++) {
    const yea = year + 1 - i;
    obj.push({ id: yea, type: `${year + 1 - i}年`});
  }

  return obj;
}

export const years = {
  type       : 'select',
  placeholder: '类型',
  clz        : 'form-control',
  readonly   : false,
  name       : 'level',
  notNull    : true,
  rt         : '',
  wt         : '订单类型',
  content    : getYears()
};

export function formNum(num: string): string {
  if (num.length > 1) {
    return `${num}`;
  }

  return `0${num}`;
}
