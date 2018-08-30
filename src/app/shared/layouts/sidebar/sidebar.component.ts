import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { GroupService, MemberService } from '@app/shared/services';

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html"
    //styleUrls: ["./sidebar-nav.component.scss"],
})
export class SidebarComponent implements OnInit {

	private subscribeGroups: any;
	public groups: any = [];
	public members: any = [];
	public typeSidebar: string;

    constructor(
    	private groupService: GroupService,
    	private memberService: MemberService
    ) {
    }

    ngOnInit() {
    	this.typeSidebar = 'groups';
    	this.subscribeGroups = this.groupService.$groupsObservable.subscribe(data => {
    		this.groups = data;
    	});
    }

    public getMembers(group: any){
    	this.memberService.getMembersByGroupId(group.groupId)
    	.subscribe((data: any) => {
    		this.groupService.setGroupById(data.group);
    		this.typeSidebar = 'members';
    		this.members = data.group;
    	});
    }

    public getMemberById(member: any){
    	this.memberService.getById(member.memberId)
    	.subscribe((data: any) => {
    		this.memberService.addMemberWorld(data.terminalLocationList.terminalLocation[0]);
    		console.log(data.terminalLocationList.terminalLocation[0]);
    	}, (error: any) => {
    		if(error.status == 304)
    			console.log("Este miembro no esta localizado actualmente");
    	});
    }

    public back(){
    	this.typeSidebar = 'groups';
    }

}


