import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    public get(path: string) {
        return this.http.get(
            `${environment.serverUrl + path}`
        );
    }

    public delete(path: string) {
        return this.http.delete(
            `${environment.serverUrl + path}`
        );
    }

    public put(path: string, params: any) {
        return this.http.put(
            `${environment.serverUrl + path}`,
            params
        );
    }

    public post(path: string, params: any) {
        return this.http.post(
            `${environment.serverUrl + path}`,
            params
        );
    }
}