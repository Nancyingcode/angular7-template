export interface HttpResult {
  code: number;
  msg: string;
  data: any;
  token?: string;
}

export interface AdminResult extends HttpResult {
  data: {
    emps: any,
    count: number;
  };
}

export interface TotalResult extends HttpResult {
  data: any;
}

export interface RuleNumberResult extends HttpResult {
  data: any;
}

export interface DefaultDataFormate {
  list: any;
  count: number;
  type?: number;
}

export interface DefaultDetailDataFormate {
  data: any;
}

// export interface DefaultSingleData {

// }

export type HttpType = HttpResult ;
