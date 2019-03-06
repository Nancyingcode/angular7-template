import { FormItem } from 'src/app/interface/component';
export * from '../index';
export const announceUpdateItems: FormItem[] = [
  {
    title: '公告标题',
    type: 'number',
    placeholder: '公告标题',
    clz: 'form-control announce announce-title mb-3',
    name: 'title',
    rt: '可用',
    wt: '请输入公告标题',
    readonly: false
  },
  {
    title: '公告内容',
    type: 'text',
    placeholder: '公告内容',
    clz: 'form-control announce announce-content',
    name: 'content',
    rt: '',
    wt: '请输入公告内容',
    readonly: false
  }
];
