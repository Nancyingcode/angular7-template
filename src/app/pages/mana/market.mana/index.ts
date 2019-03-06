export * from '../index';

export interface PreviewImage {
  uid: any;
  name: string;
  status: string;
  url: string;
}

export const itemStatus = {
  1: '上架',
  2: '下架',
};
