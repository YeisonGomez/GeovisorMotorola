import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { Point } from '@app/shared/models';

@Injectable()
export class MemberService {

	private memberArray: Array<Point> = [];
	private memberObservable: Subject<any> = new BehaviorSubject<any>(null);
	public  $memberObservable = this.memberObservable.asObservable();


    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    public getById(id : string) {
    	let token = localStorage.getItem('access_token');
        return this.api.get('uns_api', `/location/1/abc/${id}?access_token=${token}`);
    }

    public addMemberWorld(member: any){
		this.memberArray.push(member);
		this.memberObservable.next(this.memberArray);
	}
}