import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '@app/shared/services';

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
        private router: Router,
        private groupService: GroupService) {
    }

    ngOnInit() {
    	this.groupService.test()
    	.subscribe(data => {
    		console.log(data);
    	});
    }
}