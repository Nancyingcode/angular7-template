import { Page } from './component';
import { HttpResult } from './http';

interface LineUpData extends Page {
  phone: string;
}

interface LineUpResult extends HttpResult {
  data: {
    lineUps: any;
    count: number;
  };
}

export { LineUpResult, LineUpData };
