interface DefaultDropDownContent {
  id: number | string;
  type: string;
}

export interface DefaultDropDown {
  type: string;
  placeholder: string;
  clz: string;
  readonly: boolean;
  name: string;
  notNull: boolean;
  rt: string; // 正确消息
  wt: string; // 错误消息
  content: DefaultDropDownContent[];
}
