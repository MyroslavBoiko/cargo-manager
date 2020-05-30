import {Injectable} from '@angular/core';
import {Order} from '../../_models/Order';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/api/order/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'json'});
  }

  getCustomerOrders(username: string): Observable<any> {
    return this.http.get(API_URL + 'customer', {
      params: {username},
      responseType: 'json'
    });
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post(API_URL, order);
  }
}


