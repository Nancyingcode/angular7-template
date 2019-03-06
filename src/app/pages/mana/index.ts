export * from '../index';

export const teamLevels = {
  0: '未申请',
  1: '普通运营中心',
  2: '初级运用中心',
  3: '高级运营中心'
};

export const userLevels = {
  0: '未激活',
  1: '节能经纪人',
  2: '绿能经纪人',
  3: '赋能经济人',
  4: '超能经济人'
};

const arr = [];
for (const i in teamLevels) {
  if (i) {
    arr.push({ id: i, type: teamLevels[i] });
  }
}

export const teamLevelsDropDown = arr;
