import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Config, DefaultDataFormate,
  DefaultDetailDataFormate,
  GameBuyData, GameBuyResult,
  GameIncomeData, GameIncomeDetailResult,
  GameIncomeResult, GameRechargeData,
  GameRechargeResult,
  GameWbscResult
} from '../http';
import { HttpService } from '../http/http';
import { LoginService } from './login.service';

const { gameRecharge, gameBuy, gameWbsc, gameIncome, gameIncomeDetail } = Config.apis;

const incomeType = {
  1: '免费草屋',
  2: '作坊',
  3: '公司',
  4: '集团公司'
};

const buyType = {
  1 : '购买水电费',
  2 : '招聘总经理',
  3 : '招聘挖掘机',
  4 : '招聘经理',
  5 : '招聘高级矿工',
  6 : '招聘矿工',
  7 : '招聘工头',
  8 : '邀请注册赠送（赠送100）+',
  9 : '新用户注册赠送（赠送1000） +',
  10: '升级',
  11: '充值金币',
  12: '直推奖励'
};

@Injectable()
export class GameService {
  constructor(private ls: LoginService, private http: HttpService) {}

  /**
   * 游戏充值记录
   * @param data
   */
  getRechargeList(data: GameRechargeData): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', gameRecharge, data).pipe(
      map((res: GameRechargeResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

    /**
   * 游戏购买记录
   * @param data
   */
  getBuyList(data: GameBuyData): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', gameBuy, data).pipe(
      map((res: GameBuyResult) => {
        const { content, totalElements } = res.data;
        const list = content.map(item => ({ ...item, typeStr: buyType[item.type] }));
        return { list, count: totalElements };
      })
    );
  }

    /**
   * WBSC记录
   * @param data
   */
  getWbscList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', gameWbsc, {}, data).pipe(
      map((res: GameWbscResult) => {
        const { content, totalElements } = res.data;
        return { list: [res.data], count: 1 };
      })
    );
  }

      /**
   * 个人WBSC记录
   * @param data
   */
  getSingleWbscList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', gameWbsc, {}, data).pipe(
      map((res: GameWbscResult) => {
        const { content, totalElements } = res.data;
        return { list: [res.data], count: 1 };
      })
    );
  }

    /**
   * 游戏收益记录
   * @param data
   */
  getIncomeList(data: GameIncomeData): Observable<DefaultDataFormate> {
    return this.http.observableReq('post', gameIncome, data).pipe(
      map((res: GameIncomeResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

    /**
   * 个人收益记录
   * @param data
   */
  getSingleIncomeList(data: any): Observable<DefaultDetailDataFormate> {
    return this.http.observableReq('post', gameIncomeDetail, data).pipe(
      map((res: GameIncomeDetailResult) => {
        if (res) {
          const content = res.data.map(item => {
            return { ...item, typeStr: incomeType[item.type] };
          });

          return { data: content };
        }

        return { data: {} };
      })
    );
  }
}
