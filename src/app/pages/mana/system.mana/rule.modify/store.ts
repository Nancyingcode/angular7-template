export const listOne = [
  {
    title: '参与时间',
    type: 'number',
    placeholder: '天数',
    clz: 'form-control',
    readonly: false,
    name: 'lineUpTime',
    rt: '',
    wt: '参与时间不能为空',
    callback: () => { }
  }
];

export const listTwo = [
  {
    title: '收获时间',
    type: 'number',
    placeholder: '天数',
    clz: 'form-control ',
    readonly: false,
    required: true,
    name: 'rewardTime',
    rt: '',
    wt: '收获时间不能为空',
    callback: () => { }
  }
];

export const listThree = [
  {
    title: '直推奖励',
    type: 'number',
    placeholder: '百分比',
    clz: 'form-control ',
    readonly: false,
    name: 'sharingRewardRate_1',
    rt: '',
    wt: '直推矿机不能为空',
    callback: () => { }
  },
  {
    title: '间推奖励',
    type: 'number',
    placeholder: '百分比',
    clz: 'form-control ',
    readonly: false,
    name: 'sharingRewardRate_2',
    rt: '',
    wt: '间推矿机不能为空',
    callback: () => { }
  }
];
