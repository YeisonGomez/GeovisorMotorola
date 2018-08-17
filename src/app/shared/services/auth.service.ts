import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    public login(credentials: any) {
        return this.api.post(`/xlogin/`, credentials);
    }
}