import { Component, Injectable, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Log } from '../../../../tools/console';
import { ToastService } from 'src/app/service/toast.service';
import { TextToastComponent } from 'src/app/component/toast/textToast/text.toast';
const console = new Log('AdminAddComponent');

@Component({
    selector: 'app-admin-delete',
    templateUrl: './admin.delete.html',
    styleUrls: ['./admin.delete.less']
})

@Injectable()
export class AdminDeleteComponent implements OnInit {

    constructor(injector: Injector, public toasts: ToastService) {
        const ToastElement = createCustomElement(TextToastComponent, { injector });
        customElements.define('popup-element', ToastElement);
    }
    ngOnInit() {
        this.show();
    }

    show() {
        this.toasts.showToast('删除', '您确定要删除管理员?将不可恢复', function () {
            console.log('ok');
        }, function () {
            console.log('cancel');
        });
    }
}
