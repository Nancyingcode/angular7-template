import { Page } from './component';
import { HttpResult } from './http';

export interface AccountResult extends HttpResult {
  data: {
    userData: any,
    count: number;
  };
}

export interface RechargeResult extends HttpResult {
  data: {
    content: any,
    totalElements: number;
  };
}

export interface DrawResult extends HttpResult {
  data: {
    content: any,
    totalElements: number;
  };
}

export interface TransferResult extends HttpResult {
  data: {
    logs: any,
    count: number;
  };
}

export interface ExchangeResult extends HttpResult {
  data: {
    content: any,
    totalElements: number;
  };
}

export interface PaymentResult extends HttpResult {
  data: {
    content: any,
    totalElements: number;
  };
}

export interface AccountDetailResult extends HttpResult {
  data: any;
}

export interface AccountOrderListResult extends HttpResult {
  data: {
    content: any,
    totalElements: number;
  };
}

export interface AccountIncomeResult extends HttpResult {
  data: {
    content: any,
    totalElements: number;
  };
}

interface WsbcResult {
  content: any;
  totalElements: number;
}

export interface AccountWsbcIncomeResult extends HttpResult {
  data: {
    todayWSBC: string,
    amountWSBC: string;
    inComeJournalList: WsbcResult
  };
}

export interface AccountWealResult extends HttpResult {
  data: any;
}

export interface AccountInviterResult extends HttpResult {
  data: {
    userList: any,
    count: number;
  };
}

export interface AccountDetailData {
  id: number;
}

export interface AccountWealData {
  id: number;
}

export interface AccountIncomeData extends Page {
  phone: string;
  type?: number;
}

export interface AccountWsbcIncomeData extends Page {
  account: string;
  type: number;
  page: number;
  pageSize: number;
}

export interface AccountInviterData extends Page {
  userId: number;
}

export interface AccountOrderListData extends Page {
  phone?: string;
  id: number;
  month?: string;
}

export interface AccountAddData extends Page {
  phone: string;
  username: string;
  idNum: string;
  wallet: string;
  password: string;
  payword: string;
  inviteCode: string;
  fos: number;
  usdt: number;
  eth: number;
}

export interface AccountCheckDrawData {
  phone?: string;
  orderId: number;
  status: number;
}

export interface AccountCheckRechargeData {
  phone?: string;
  orderId: number;
  status: number;
}

export interface DetailItem {
  title: string;
  value: string;
}

export interface AccountIncomeDateFormate {
  list: any;
  count: number;
  total: string;
  today: string;
}
