
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http';
import { Config, Log } from './index';

const {
  productList,
  productDetail,
  productAdd,
  productUpdate,
  productDelete,
  productShelf,
  productUnShelf,
  productOrderDeliver,
  productOrderUndeliver,
  productOrderDone,
  productDeliver
} = Config.apis;

@Injectable()
export class MarketService {

  constructor(private http: HttpService) { }

  async getItems(data: any): Promise<any> {
    const res = await this.http.req('post', productList, data);
    return res.data;
  }

  async getItemDetail(data: {}): Promise<any> {
    return await this.http.req('post', productDetail, data);
  }

  async unsetItem(data: any): Promise<any> {
    return await this.http.req('post', productUnShelf, data);
  }

  async shelfItem(data: { goodsId: any; }): Promise<any> {
    return await this.http.req('post', productShelf, data);
  }

  async deleteItem(data: { goodsId: any; }): Promise<any> {
    return await this.http.req('post', productDelete, data);
  }

  async addItem(data: any): Promise<any> {
    return await this.http.req('post', productAdd, data);
  }

  async updateItem(data: any): Promise<any> {
    return await this.http.req('post', productUpdate, data);
  }

  async getUndeliverList(data: any): Promise<any> {
    const res = await this.http.req('post', productOrderUndeliver, data);
    return res.data;
  }

  async getUndeliverDetail(data: any): Promise<any> {
    const res = await this.http.req('post', productOrderDeliver, data);
    return res.data;
  }

  async getDeliverList(data: any): Promise<any> {
    const res = await this.http.req('post', productOrderDeliver, data);
    return res.data;
  }

  async getDeliverDetail(data: any): Promise<any> {
    const res = await this.http.req('post', productOrderDeliver, data);
    return res.data;
  }

  async getDoneList(data: any): Promise<any> {
    const res = await this.http.req('post', productOrderDone, data);
    return res.data;
  }

  async getDoneDetail(data: any): Promise<any> {
    const res = await this.http.req('post', productOrderDeliver, data);
    return res.data;
  }

  async deliver(data: any): Promise<any> {
    return await this.http.req('post', productDeliver, data);
  }
}
