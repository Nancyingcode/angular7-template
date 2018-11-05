import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Injectable } from '@angular/core';
import { Config } from '../../../../config/config';
// import { LoginService } from './service/login.service';

@Component({
    selector: 'app-admin-add',
    templateUrl: './admin.add.html',
    styleUrls: ['./admin.add.less']
})

@Injectable()
export class AdminAddComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {

    }

    setDefault() {

    }
}
