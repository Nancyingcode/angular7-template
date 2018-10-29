import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { TextToastComponent } from '../component/toast/textToast/text.toast';


@Injectable()
export class ToastService {
    constructor(private injector: Injector,
        private applicationRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver) { }

    showAsElement(message: string) {
        const popupEl: NgElement & WithProperties<TextToastComponent> = document.createElement('popup-element') as any;
        popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
        popupEl.message = message;
        document.body.appendChild(popupEl);
    }
}
