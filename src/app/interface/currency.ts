import { HttpResult } from './http';

export interface CurrencyCheckOrderResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface CurrencyDoneOrderResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface CurrencySellingOrderResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface CurrencyLockOrderResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface CurrencyRequestOrderResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface DoRequestData {
  adminId: string;
  orderId: string;
  type?: string;
}

export interface CurrencyCheckData {
  goodsSellerAccount: string;
  buyerAccount: string;
  orderId: string;
  status: number;
  page: number;
  pageSize: number;
}

export interface CurrencyRequestData {
  goodsSellerAccount: string;
  buyerAccount: string;
  orderId: string;
  status: number;
  page: number;
  pageSize: number;
}

export interface CurrencySellingData {
  goodsSellerAccount: string;
  buyerAccount: string;
  orderId: string;
  status: number;
  page: number;
  pageSize: number;
}
