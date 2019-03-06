import { Injectable } from '@angular/core';
import { HttpService } from '../http/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountIncomeDateFormate, AccountWsbcIncomeData, AccountWsbcIncomeResult, DetailItem } from '../http';
import {
  accountStatus, checkReq,
  formDate,
  formDateYtoS,
  AccountAddData,
  AccountCheckDrawData,
  AccountCheckRechargeData,
  AccountDetailData,
  AccountDetailResult, AccountIncomeData,
  AccountIncomeResult, AccountInviterData,
  AccountInviterResult,
  AccountOrderListData,
  AccountOrderListResult,
  AccountResult,
  AccountWealData,
  AccountWealResult, Config,
  DefaultDataFormate, DefaultDetailDataFormate,
  DrawResult,
  ExchangeResult,
  HttpType, Log,
  PaymentResult, RechargeResult, TransferResult
} from '../index';
import { LoginService } from './login.service';

const {
  accountInfo,
  accountInfoD,
  accountDraw,
  accountRecharge,
  accountWeal,
  accountInviters,
  accountOrderList,
  accountTransfer,
  accountTransferIn,
  accountTransferOut,
  accountIncome,
  accountWsbcIncome,
  accountExchange,
  accountNameALl,
  accountAdd,
  accountWealUpdate,
  accountUpdate,
  accountWealModify,
  accountLevelModify,
  accountPayment,
  accountRelation,
  accountRelationDetail,
  accountInfoUpdateDetail,
  accountCheckList,
  accountCheckDraw,
  accountCheckRecharge,
  accountOrderTotal
} = Config.apis;
const console = new Log('AccountService');

const rechargeListType = {
  1: 'successRechargeLog',
  0: 'failRechargeLog'
};

const drawListType = {
  1: 'successCashLog',
  0: 'failCashLog'
};

const accountCheckListType = {
  1: 'cashAuditList',
  0: 'rechargeAuditList'
};

const accountLevel = {
  0: '成员',
  1: '项目经理',
  2: '总经理',
  3: '总裁'
};

const coinType = {
  1: 'ETH',
  2: 'WSBC'
};

@Injectable()
export class AccountService {

  constructor(private http: HttpService, private ls: LoginService) { }

  /**
   * 用户列表
   * @param data
   */
  getAccountList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', accountInfo, data).pipe(
      map((res: AccountResult) => {
        const { userData, count } = res.data;
        const list = userData.map(item => {
          return { ...item, phone: item.mobilePhone, createTimeStr: formDate(parseInt(item.createTime, 10)) };
        });

        return { list, count };
      })
    );
  }

  /**
   * 消费记录
   * @param data
   */
  getExchangeList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', accountExchange, {}, data).pipe(
      map((res: ExchangeResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  /**
   * 收益列表
   * @param data
   */
  getIncomeList(data: AccountIncomeData): Observable<DefaultDataFormate> {
    const { type } = data;
    const sendData = { ...data, type: type.toString() };

    return this.http.observableReq('post', accountIncome, sendData).pipe(
      map((res: AccountIncomeResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

    /**
   * 收益列表
   * @param data
   */
  getWsbcIncomeList(data: AccountWsbcIncomeData): Observable<AccountIncomeDateFormate> {
    return this.http.observableReq('post', accountWsbcIncome, data).pipe(
      map((res: AccountWsbcIncomeResult) => {
        const { todayWSBC, amountWSBC, inComeJournalList } = res.data;
        return {
          list : inComeJournalList.content,
          count: inComeJournalList.totalElements,
          total: amountWSBC,
          today: todayWSBC
        };
      })
    );
  }

  /**
   * 转账记录
   */
  getTransferList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', accountTransfer, data).pipe(
      map((res: TransferResult) => {
        const { logs, count } = res.data;
        const list = logs.map(item => ({
          ...item,
          timeStr: formDate(item.time),
          phone: item.from
         }));

        return { list, count };
      })
    );
  }

  /**
   * 转入记录
   * @param data
   */
  getTransferInList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', accountTransferIn, data).pipe(
      map((res: TransferResult) => {
        const { logs, count } = res.data;
        const list = logs.map(item => ({
          ...item,
          timeStr: formDate(item.time)
         }));

        return { list, count };
      })
    );
  }

  /**
   * 转出记录
   * @param data
   */
  getTransferOutList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', accountTransferOut, data).pipe(
      map((res: TransferResult) => {
        const { logs, count } = res.data;
        const list = logs.map(item => ({
          ...item,
          timeStr: formDate(item.time)
         }));

        return { list, count };
      })
    );
  }

  /**
   * 资产信息
   * @param data
   */
  getWealList(data: AccountWealData): Observable<DefaultDetailDataFormate> {
    const { id } = data;
    const sendData = { userId: id };
    return this.http.observableReq('post', accountWeal, sendData).pipe(
      map((res: AccountWealResult) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 账号个人详情
   * @param data
   * @param params
   */
  getAccountDetail(data: AccountDetailData): Observable<DefaultDetailDataFormate> {
    const { id } = data;
    const sendData = { id };
    return this.http.observableReq('post', accountInfoD, sendData).pipe(
      map((res: AccountDetailResult) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  isEven(num: number): boolean {
    if (num % 2 === 0 && num > 0) {
      return true;
    }

    return false;
  }

  formateDetail(data: any): DetailItem[][] {
    const keys = Object.keys(data);
    keys.map((key, i) => {
      if (this.isEven(i)) {

      }
    });

    const arr: DetailItem[][] = [
    ];

    return [[{ title: '', value: ''}]];
  }

  async getUpdateInfo({ id }: any): Promise<any> {
    const res = await this.http.req('post', accountInfoUpdateDetail, { id });
    return res.data;
  }

  async getAllAccount(): Promise<any> {
    const res = await this.http.req('post', accountNameALl, {});
    return res.data;
  }

  /**
   * 添加账号
   * @param data AccountAddData
   */
  addAccount(data: AccountAddData): Observable<boolean> {
    const adminId = this.ls.getAdminId();
    const { phone, username, idNum, wallet, password, payword, inviteCode, fos, usdt, eth } = data;
    const sendData = {
      account: phone,
      loginPwd: password,
      realName: username,
      payPwd: payword,
      idCard: idNum,
      pruseAddr: wallet,
      inviteCode,
      adminId
    };

    return this.http.observableReq('post', accountAdd, sendData).pipe(
      map((res) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  /**
   * 邀请人列表
   * @param data
   */
  getInviterList(data: AccountInviterData): Observable<DefaultDataFormate> {
    const sendData = { ...data };
    return this.http.observableReq('post', accountInviters, sendData).pipe(
      map((res: AccountInviterResult) => {
        if (checkReq(res)) {
          const { userList, count } = res.data;
          const list = userList.map(item => ({ ...item, timeStr: formDate(item.registerTime)}));
          return { list: userList, count };
        }

        return { list: [], count: 0 };
      })
    );
  }

  /**
   * 获取理财信息
   * @param data
   */
  getOrderList(data: AccountOrderListData): Observable<DefaultDataFormate> {
    const { pageSize, id } = data;
    const sendData = { userId: id, pageSize };
    return this.http.observableReq('post', accountOrderList, sendData).pipe(
      map((res: AccountOrderListResult) => {
        const { content, totalElements } = res.data;
        const list = content.map(item => {
          item.levelStr = accountLevel[item.level];
          item.timeCount = `${item.startTime}---${item.endTime}`;
          return item;
        });

        return { list, count: totalElements };
      })
    );
  }

  /**
   * 每月总份数
   * @param data
   */
  getMonthTotal(data: any): Observable<DefaultDetailDataFormate> {
    const { month } = data;
    const sendData = { month: month.toString() };
    return this.http.observableReq('post', accountOrderTotal, sendData).pipe(
      map((res) => {
        if (checkReq(res)) {
          return { data: res.data };
        }

        return { data: {} };
      })
    );
  }

  /**
   * 提比记录
   * @param data
   */
  getDrawList(data: any): Observable<DefaultDataFormate> {
    const path = drawListType[data.type];
    return this.http.observableReq('post', accountDraw, data).pipe(
      map((res: DrawResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  /**
   * 充值记录
   * @param data
   */
  getRechargeList(data: any): Observable<DefaultDataFormate> {
    const path = rechargeListType[data.type];
    return this.http.observableReq('post', accountRecharge, data).pipe(
      map((res: RechargeResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

    /**
   * 审核记录
   * @param data
   */
  getCheckList(data: any): Observable<DefaultDataFormate> {
    const path = accountCheckListType[data.type];
    return this.http.observableReq('post', `${accountCheckList}${path}`, data).pipe(
      map((res: RechargeResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements, type: data.type };
      })
    );
  }

  /**
   * 审核提币
   * @param data
   */
  checkDraw(data: AccountCheckDrawData): Observable<boolean> {
    const { orderId, status } = data;
    const adminPhone = this.ls.getAdminPhone();
    const postData = { orderId, status, adminPhone };
    return this.http.observableReq('post', accountCheckDraw, postData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  checkRecharge(data: AccountCheckRechargeData): Observable<boolean> {
    const { orderId, status } = data;
    const adminPhone = this.ls.getAdminPhone();
    const postData = { orderId, status, adminPhone };
    return this.http.observableReq('post', accountCheckRecharge, postData).pipe(
      map((res: HttpType) => {
        if (checkReq(res)) {
          return true;
        }

        return false;
      })
    );
  }

  async getWealModifyList(data: any): Promise<any> {
    const res = await this.http.req('post', accountWealModify, data);
    return res.data;
  }

  async getLevelModifyList(data: any): Promise<any> {
    const res = await this.http.req('post', accountLevelModify, data);
    return res.data;
  }

  getRelationList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', accountRelation, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          const { content, totalElements } = res.data;
          return { list: content, count: totalElements };
        }

        return { list: [], count: 0 };
      })
    );
  }

  /**
   * 某人的邀请人
   * @param data
   */
  getRelationDetail(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', accountRelationDetail, data).pipe(
      map((res) => {
        if (checkReq(res)) {
          const { content, totalElements } = res.data;
          return { list: content, count: totalElements };
        }

        return { list: [], count: 0 };
      })
    );
  }

  getPaymentList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', accountPayment, data).pipe(
      map((res: PaymentResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  async updateWeal(data: any): Promise < any > {
    const { gold } = data;
    const sendData = { ...data, gold: gold.toString() };
    return await this.http.req('post', accountWealUpdate, sendData);
  }

  async updateAccount(data: any): Promise < any > {
    return await this.http.req('post', accountUpdate, data);
  }

  async delete(): Promise < any > {

  }
}
