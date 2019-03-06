import { HttpResult } from './http';

export interface WalletBuyResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface WalletReBuyResult extends HttpResult {
  data: {           // 数据
    content: any;      // 列表
    totalElements: number;  // 行数
  };
}

export interface WalletExchangeResult extends HttpResult {
  data: {           // 数据
    content: any;      // 列表
    totalElements: number;  // 行数
  };
}
