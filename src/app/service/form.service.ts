import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkFormate, checkPasswordFormate } from '../http';
import { ConfigService } from './config.service';
import { checkRePwd } from './index';

@Injectable()
export class FormGroupService {
  constructor(private config: ConfigService) { }

  toFormGroup(props: any): FormGroup {
    const group: any = {};

    props.forEach(item => {
      const arr: any = [];
      group[item.name] = item.required
        ? new FormControl(null || '', [Validators.required])
        : new FormControl(null || '');
    });

    return new FormGroup(group);
  }

  toPasswordFormGroup(props: any, fir: string, sec: string): FormGroup {
    const group: any = {};

    props.forEach(item => {
      const { PASSWORD_REGEX, ACCOUNT_REGEX, PASSWORD_VALIDATOR, ACCOUNT_VALIDATOR } = this.config;
      switch (item.name) {
        // case 'adminPassword': {
        //   group[item.name] = item.required
        //     ? new FormControl(null || '', [Validators.required, checkFormate(PASSWORD_REGEX, PASSWORD_VALIDATOR)])
        //     : new FormControl(null || '', [checkFormate(PASSWORD_REGEX, PASSWORD_VALIDATOR)]);
        //   break;
        // }

        // case 'userPassword': {
        //   group[item.name] = item.required
        //     ? new FormControl(null || '', [Validators.required, checkFormate(PASSWORD_REGEX, PASSWORD_VALIDATOR)])
        //     : new FormControl(null || '', [checkFormate(PASSWORD_REGEX, PASSWORD_VALIDATOR)]);
        //   break;
        // }

        // case 'confirmPassword': {
        //   group[item.name] = item.required
        //     ? new FormControl(null || '', [Validators.required, checkFormate(PASSWORD_REGEX, PASSWORD_VALIDATOR)])
        //     : new FormControl(null || '', [checkFormate(PASSWORD_REGEX, PASSWORD_VALIDATOR)]);
        //   break;
        // }

        // case 'account': {
        //   group[item.name] = item.required
        //     ? new FormControl(null || '', [Validators.required, checkFormate(ACCOUNT_REGEX, ACCOUNT_VALIDATOR)])
        //     : new FormControl(null || '', [checkFormate(ACCOUNT_REGEX, ACCOUNT_VALIDATOR)]);
        //   break;
        // }

        default: {
          group[item.name] = item.required
            ? new FormControl(null || '', Validators.required)
            : new FormControl(null || '');
        }
      }
    });

    return new FormGroup(group, { validators: checkRePwd(fir, sec) });
  }

  toRuleFormGroup(props: any): FormGroup {
    const { PASSWORD_REGEX, ACCOUNT_REGEX, PASSWORD_VALIDATOR, ACCOUNT_VALIDATOR, NUMBER_REGEX, NUMBER_VALIDATOR } = this.config;
    const group: any = {};

    props.forEach(item => {
      switch (item.name) {
        case 'password': {
          group[item.name] = new FormControl(null || '', [Validators.required, checkPasswordFormate(/^[a-zA-Z]\w{5,17}$/)]);
          break;
        }

        case 'proportion': {
          group[item.name] = item.required
            ? new FormControl(item.value || '', [Validators.required, checkFormate(NUMBER_REGEX, NUMBER_VALIDATOR)])
            : new FormControl(item.value || '', [checkFormate(NUMBER_REGEX, NUMBER_VALIDATOR)]);
          break;
        }

        case 'wsbc': {
          group[item.name] = item.required
            ? new FormControl(item.value || '', [Validators.required, checkFormate(NUMBER_REGEX, NUMBER_VALIDATOR)])
            : new FormControl(item.value || '', [checkFormate(NUMBER_REGEX, NUMBER_VALIDATOR)]);
          break;
        }

        case 'eth': {
          group[item.name] = item.required
            ? new FormControl(item.value || '', [Validators.required, checkFormate(NUMBER_REGEX, NUMBER_VALIDATOR)])
            : new FormControl(item.value || '', [checkFormate(NUMBER_REGEX, NUMBER_VALIDATOR)]);
          break;
        }

        case 'gold': {
          group[item.name] = item.required
            ? new FormControl(item.value || '', [Validators.required, checkFormate(NUMBER_REGEX, NUMBER_VALIDATOR)])
            : new FormControl(item.value || '', [checkFormate(NUMBER_REGEX, NUMBER_VALIDATOR)]);
          break;
        }

        default: {
          group[item.name] = item.required
            ? new FormControl(null || '', Validators.required)
            : new FormControl(null || '');
        }
      }
    });

    return new FormGroup(group);
  }

}
