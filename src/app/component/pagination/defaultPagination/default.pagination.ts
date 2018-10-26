import { Component, Injectable, Input, OnInit, TemplateRef } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-default-pagination',
    templateUrl: './default.pagination.html',
    styleUrls: ['./default.pagination.less']
})

@Injectable()
export class DefaultPaginationComponent implements OnInit {


    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) { setTheme('bs4'); }

    ngOnInit() {
        console.log('');
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

}
