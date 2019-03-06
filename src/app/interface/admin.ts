import { HttpResult } from './http';
export interface AdminAddData {
  adminId?: number;
  account: string;
  username?: string;
  adminPassword: string;
  type: string;
}

export interface AdminDeleteData {
  adminId?: number;
  id?: number;
  account?: string;
  username?: string;
}

export interface AdminUpdateData {
  id: number;
  adminId?: number;
  account: string;
  username?: string;
  oldPassword: string;
  newPassword: string;
  type: string;
}

export interface AdminPaymentUpdateData {
  bank: string;
  openBank: string;
  name: string;
  bankCard: string;
}

export interface AdminPaymentResult extends HttpResult {
  data: any;
}
