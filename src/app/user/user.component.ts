import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService, OrdersService } from '../../shared/services';

declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    //styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    constructor(
        private router: Router) {
    }

    ngOnInit() {
    }
}