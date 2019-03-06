import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import * as _ from 'lodash';
import { checkRePwd } from './index';

@Injectable()
export class ValueService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  saveToGlobal(key: string, value: any): boolean {
    if (_.isObject(value)) {
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
      }
    }

    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(key, value);
    }

    return true;
  }

  getGlobalValue(key: string): string {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(key);
    }

    return '';
  }

}
