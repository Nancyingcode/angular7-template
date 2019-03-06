import { HttpResult } from './http';

interface InvestResultContent {
  content: any;
  totalElements: number;
}

export interface InvestResult extends HttpResult {
  data: {
    privatePlacementList: InvestResultContent,
    eth2wsbc: string;
  };
}

export interface InvestData {
  [x: string]: any;
}

export interface InvestDataFormate {
  list: any;
  count: number;
  proportion: string;
}
