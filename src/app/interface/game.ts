import { HttpResult } from './http';

export interface GameRechargeResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface GameBuyResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface GameWbscResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface GameIncomeResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface GameIncomeDetailResult extends HttpResult {
  data: any;
}

interface GameRechargeData {
  account: string;
  page: number;
  pageSize: number;
}

interface GameBuyData {
  account: string;
  page: number;
  pageSize: number;
}

interface GameIncomeData {
  account: string;
  page: number;
  pageSize: number;
}

export { GameRechargeData, GameBuyData, GameIncomeData };
