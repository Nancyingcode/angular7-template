import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../config/config';
import { CurrencyCheckOrderResult, CurrencyDoneOrderResult, CurrencyLockOrderResult, CurrencyRequestOrderResult, CurrencySellingOrderResult, DefaultDataFormate } from '../http';
import { HttpService } from '../http/http';
import { WalletBuyResult, WalletExchangeResult, WalletReBuyResult } from '../interface/wallet';

const { walletBuy, walletReBuy, walletExchange } = Config.apis;

@Injectable()
export class WalletService {

  constructor(private http: HttpService) { }

  /**
   * 认购记录
   * @param data
   */
  getBuyList(data: any): Observable<DefaultDataFormate>  {
    return this.http.observableReq('post', walletBuy, data).pipe(
      map((res: WalletBuyResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  /**
   * 回购记录
   * @param data
   */
  getReBuyList(data: any): Observable<DefaultDataFormate>  {
    return this.http.observableReq('post', walletReBuy, data).pipe(
      map((res: WalletReBuyResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }

  /**
   * 兑换记录
   * @param data
   */
  getExchangeList(data: any): Observable<DefaultDataFormate> {
    return this.http.observableReq('get', walletExchange, {}, data).pipe(
      map((res: WalletExchangeResult) => {
        const { content, totalElements } = res.data;
        return { list: content, count: totalElements };
      })
    );
  }
}
