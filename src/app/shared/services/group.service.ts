import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable()
export class GroupService {

    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    public test() {
    	let token = localStorage.getItem('access_token');
        return this.api.get('uns_api', `/groupmgt/1/city.gov/pres:dToddLeigh@abc/groups?access_token=${token}`);
    }
}