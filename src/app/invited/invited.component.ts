import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
    selector: 'invited',
    templateUrl: './invited.component.html'
    //styleUrls: ["./invited.component.scss"]
})
export class InvitedComponent implements OnInit {


    constructor(private router: Router) {
    }

    ngOnInit() {
    }
}