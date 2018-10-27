import { Component, Injectable, Input, OnInit, TemplateRef, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { NzCarouselComponent } from 'ng-zorro-antd';
import { Log } from '../../../tools/console';
const console = new Log('DefaultToastComponent');

@Component({
    selector: 'app-default-toast',
    templateUrl: './default.toast.html',
    styleUrls: ['./default.toast.less']
})

@Injectable()
export class DefaultToastComponent implements OnInit {
    @Input() templateStr: string; // 输入的模板string
    modalRef: BsModalRef;
    isVisible = false;
    constructor(private modalService: BsModalService) { setTheme('bs4'); }

    ngOnInit() {
        // this.getTemplate();
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}
