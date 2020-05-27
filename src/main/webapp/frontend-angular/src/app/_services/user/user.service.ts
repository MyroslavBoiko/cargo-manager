import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'customer', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'driver', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'manager', {responseType: 'text'});
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/users', {responseType: 'json'});
  }

  getUserData(userId): Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/user',
      {
        params: {userId},
        responseType: 'json'
      });
  }

}
