import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class GroupService {

    private groups: any = [];
	private groupsObservable: Subject<any> = new BehaviorSubject<any>(null);
    public $groupsObservable = this.groupsObservable.asObservable();

    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    public getAllGroups() {
    	let token = localStorage.getItem('access_token');
        return this.api.get('uns_api', `/groupmgt/1/abc/pres:utoddleigh@abc/groups?access_token=${token}`);
    }

    public setGroupById(group: any){
        let group_select: any = this.groups.find((item: any) => { return item.groupId == group.groupId });
        group_select.members = group.members;
        this.groupsObservable.next(this.groups);
    }

    public setGroups(groups: any){
        this.groups = groups;
        this.groupsObservable.next(this.groups);
    }
}