import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { TextToastComponent } from '../component/toast/textToast/text.toast';


@Injectable()
export class ToastService {

    showToast(title: string, message: string, callbackOk: any, callbackCancel: any) {
        const ele: NgElement & WithProperties<TextToastComponent> = document.createElement('popup-element') as any;
        ele.addEventListener('closed', function () {
            document.body.removeChild(ele);
        });
        ele.Title = title;
        ele.Message = message;
        ele.confirm = callbackOk;
        ele.close = callbackCancel;
        document.body.appendChild(ele);
    }
}
