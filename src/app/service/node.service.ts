import { Injectable } from '@angular/core';

import { Config } from '../config/config';
import { HttpService } from '../http/http';
const {
  nodeList,
  nodeReqList,
  nodeReqCheck
} = Config.apis;

@Injectable()
export class NodeService {

  constructor(private http: HttpService) { }

  async getNodeList(data: any): Promise<any> {
    const res = await this.http.req('post', nodeList, data);
    return res.data;
  }

  async getNodeReqList(data: any): Promise<any> {
    const res = await this.http.req('post', nodeReqList, data);
    return res.data;
  }

  async checkRequest(data: any): Promise<any> {
    return await this.http.req('post', nodeReqCheck, data);
  }
}
