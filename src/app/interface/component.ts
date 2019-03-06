export interface NormalButton {
                    name: string;
                    type: string;
                    style?: string;   // primary, default, delete
           callback(item: {}): void;     // 当你需要改变点击后的样式
                    choose?: string;
                    hidden?: boolean;
                    right?: string;   // 权限
}

export interface NotNamedButton {
                    placeholder?: string;
           callback(item: {}): void;
}

export interface PointerButton {
                    alert: string[];
           callback(item: {}): void;
}

export interface Pagination {
  callback(item: any): void;  // 控制翻页的回调
}

export interface UploadProp {
  action: string;
  callback: any;     // callback for get some data
  remove?: void;
}

export interface TabComponent {
  data: {};
  id?: number | string;
  account?: string;
}

interface DropDownItem {
  id: number;     // ID值
  type: string;   // 名称
}

export interface FormItem {
  title: string;   // 标题
  type: string;   // 输入框类型
  placeholder: string;   // placeholder
  clz: string;   // 类名
  readonly: boolean;  // 是否只读
  name: string;   // 表单的name
  rt: string;   // 正确的信息提示
  wt: string;   // 输入错误事信息提升
  content?: DropDownItem[];
  required?: boolean;  // 必填
  callback?(): void;     // 图片上传的成功回调
  url?: string;   // 图片路径
}

export interface DropDown {
  type: string;
  placeholder: string;
  clz: string;
  readonly: boolean;
  name: string;
  notNull: boolean;
  rt: string;
  wt: string;
  content: {};
}

interface Page {
  pageNo: number;
  pageSize: number;
}

export interface TableProps {
  title: string[];
  column: string[];
  list: any[];
  count: number;
  filters?: string[];  // 筛选字段
  types?: string[];  //  筛选类型
  selecters?: any[];
}

export interface TableDetailProps {
  title: string[];
  column: string[];
  data: any;
}

export interface TableAnnounceProps {
  list: any;
  count: number;
}

interface CurrencyDetailRow {
  firstName: string;
  firstValue: string;
  secondName: string;
  secondValue: string;
}

interface CurrecyDetailImage {
  title: string;
  url: string;
}

export interface CurrecyDetailProps {
  rows: CurrencyDetailRow[];
  images: CurrecyDetailImage[];
}

export { Page };
