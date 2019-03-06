import { HttpResult } from './http';

export interface VideoResult extends HttpResult {
  data: {
    content: any;
    totalElements: number;
  };
}

export interface VideoListData {
  type?: number;
  page: number;
  size: number;
}

export interface VideoAddData {
  type?: number;
  page?: number;
  size?: number;
  title?: string;
  img: any;
  video: any;
}

export interface VideoDeleteData {
  id: number;
}
