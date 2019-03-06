import { Type } from '@angular/core';

export class TabItem {
  // tslint:disable-next-line:no-any
  constructor(public component: Type<any>, public data: any) {}
}
