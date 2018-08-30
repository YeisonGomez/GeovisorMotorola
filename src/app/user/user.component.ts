import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService, DeviceService, AuthService } from '@app/shared/services';

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
        private groupService: GroupService,
        private deviceService: DeviceService,
        private authService: AuthService) {
    }

    ngOnInit() {
        this.getAllGroups();
        this.getAllDevices();
    }

    private getAllGroups(){
        this.groupService.getAllGroups()
        .subscribe((data: any) => {
            this.groupService.setGroups(data.groupList.groupDescriptions);
        }, error => {
            if(error.status == 401)
                this.refreshToken();
        });
    }

    private getAllDevices(){
        this.deviceService.getAllDevices()
        .subscribe(data => {
            console.log(data);
        });
    }

    private refreshToken(){
        this.authService.refreshToken()
        .subscribe((data: any) => {
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            localStorage.setItem("token_type", data.token_type);
            this.getAllGroups();
            this.getAllDevices();
        });
    }
}