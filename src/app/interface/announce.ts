import { Page } from './component';

export interface AnnounceData extends Page {
  title?: string;
}

export interface AnnounceUpdateData {
  title: string;
  content: string;
  id: number;
}

export interface AnnounceAddData {
  title: string;
  content: string;
}

export interface AnnounceResult {
  data: {
    notices: any;
    count: number;
  };
}
