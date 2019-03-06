export * from '../index';

export const FormItem = [
  {
    title: '产品编号',
    type: 'text',
    placeholder: '产品编号',
    clz: 'form-control ',
    name: 'goodsId',
    rt: '可用',
    wt: '格式不正确',
    readonly: false
  },
  {
    title: '产品名称',
    type: 'text',
    placeholder: '产品名称',
    clz: 'form-control',
    name: 'name',
    rt: '',
    wt: '请输入产品名称',
    readonly: false
  },
  {
    title: '产品图片',
    type: 'file',
    placeholder: '',
    clz: 'custom-file-input',
    name: 'bigPicture',
    rt: '上传成功',
    wt: '图片必须提供',
    readonly: false
  },
  {
    title: '缩略图片',
    type: 'file',
    placeholder: '',
    clz: 'custom-file-input',
    name: 'smallPicture',
    rt: '上传成功',
    wt: '图片必须提供',
    readonly: false
  },
  {
    title: '人民币价格',
    type: 'number',
    placeholder: '产品价值',
    clz: 'form-control',
    name: 'price',
    rt: 'number is ok',
    wt: '请输入产品成本',
    readonly: false
  },
  {
    title: '产品描述',
    type: 'text',
    placeholder: '材质',
    clz: 'form-control',
    name: 'describe',
    rt: 'right',
    wt: '材质不能为空',
    readonly: false
  },
  {
    title: '库存',
    type: 'number',
    placeholder: '产状',
    clz: 'form-control',
    name: 'inventory',
    rt: 'righ ',
    wt: '请输入库存',
    readonly: false
  },
  {
    title: '奖励',
    type: 'text',
    placeholder: '颜色',
    clz: 'form-control',
    readonly: false,
    name: 'reward',
    rt: '',
    wt: '请输入产品颜色'
  },
  {
    title: '上架状态',
    type: 'select',
    placeholder: '上架状态',
    clz: 'form-control',
    name: 'type',
    rt: 'right',
    wt: '上架状态必填',
    readonly: false
  }
];

export interface FormItem {
  title: string;        // 标题
  type: string;         // 输入框类型
  placeholder: string;  // placeholder
  clz: string;          // 类名
  readonly: boolean;    // 是否只读
  name: string;         // 表单的name
  rt: string;           // 正确的信息提示
  wt: string;           // 输入错误事信息提升
  callback?: any;       // 图片上传的成功回调
  url?: string;         // 图片路径
}

export interface FileList {
  uid: any;       // 图片的顺序id
  name: string;   // 图片格式 xxx.png
  status: string; // 图片状态 done
  url: string;    // 图片地址
}
