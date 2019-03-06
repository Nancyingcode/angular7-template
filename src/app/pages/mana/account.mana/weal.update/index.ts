export * from '../index';

export const wealUpdateList = [
  {
    title: '金币',
    type: 'number',
    placeholder: '数量',
    clz: 'form-control',
    readonly: false,
    name: 'gold',
    required: true,
    rt: '',
    wt: '数量不能为空',
    callback: () => { }
  },
  {
    title: 'ETH',
    type: 'number',
    placeholder: '数量',
    clz: 'form-control',
    readonly: false,
    name: 'eth',
    required: true,
    rt: '',
    wt: '数量不能为空',
    callback: (item) => {
      // this.validatePwd(item);
    }
  },
  {
    title: 'WSBC',
    type: 'number',
    placeholder: '数量',
    clz: 'form-control',
    readonly: false,
    name: 'wsbc',
    required: true,
    rt: '',
    wt: '数量不能为空',
    callback: (item) => {
      // this.validatePwd(item);
    }
  }
];
