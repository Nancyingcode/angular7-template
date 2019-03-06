export * from '../index';
import { FormItem } from '../index';

export const replyItems: FormItem[] = [
  {
    title: '留言内容',
    type: 'text',
    placeholder: '留言内容',
    clz: 'form-control announce announce-content mb-3',
    name: 'message',
    rt: '可用',
    wt: '请输入公告标题',
    readonly: false
  },
  {
    title: '回复内容',
    type: 'text',
    placeholder: '回复内容',
    clz: 'form-control announce announce-content',
    name: 'reply',
    rt: '',
    wt: '请输入公告内容',
    readonly: false
  }
];
