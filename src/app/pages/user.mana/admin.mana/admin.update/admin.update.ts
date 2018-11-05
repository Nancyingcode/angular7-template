import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Injectable } from '@angular/core';
import { Config } from '../../../../config/config';
// import { LoginService } from './service/login.service';

@Component({
    selector: 'app-admin-update',
    templateUrl: './admin.update.html',
    styleUrls: ['./admin.update.less']
})

@Injectable()
export class AdminUpdataComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {

    }

    setDefault() {

    }
}
