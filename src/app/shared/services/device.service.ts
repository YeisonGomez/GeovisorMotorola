import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable()
export class DeviceService {

    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    public getAllDevices() {
    	let token = localStorage.getItem('access_token');
        return this.api.get('uns_api', `/presence/1/abc/pres:utoddleigh@abc?access_token=${token}`);
    }
}