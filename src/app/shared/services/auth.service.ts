import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

	public client_id: string = "DevName";
	public client_secret: string = ")(MotSolSand4321";
	public redirect_uri: string = "http://localhost/";

    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    public getAccessToken(state: string, code: string) {
        return this.api.post(
        	'motorola_auth', 
        	`/token.oauth2?client_id=${this.client_id}&response_type=code&state=${state}&redirect_uri=${this.redirect_uri}&grant_type=authorization_code&client_secret=${this.client_secret}&code=${code}`, 
        	undefined);
    }
}