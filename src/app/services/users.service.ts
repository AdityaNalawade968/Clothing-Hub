import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../comman/config';
import { Users } from '../comman/Users';
import { console } from 'inspector';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private config: Config = new Config();

    // private apiUrl = this.config.apiUrl + 'users'; 

    constructor(private http: HttpClient) { }

    save(item: Users) {
        return this.http.post('http://localhost:3000/users', item);
    }

    checkUser(item: Users): Observable<any> {
        return this.http.get(`http://localhost:3000/users?mobileNo=${item.mobileNo}&password=${item.password}`);
    }

    getUsers() {
        // return this.http.get<Users[]>(this.apiUrl + '/getAll')
    }
}
