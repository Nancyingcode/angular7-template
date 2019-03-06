import { HttpResult } from './http';

export interface C2cDoneResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface C2cSellingResult extends HttpResult {
  data: {           // 数据
    content: any;      // 列表
    totalElements: number;  // 行数
  };
}
