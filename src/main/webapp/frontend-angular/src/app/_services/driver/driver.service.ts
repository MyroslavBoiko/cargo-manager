import {Injectable} from '@angular/core';
import {Driver} from '../../_models/Driver';
import {Company} from '../../_models/Company';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:8080/api/driver/';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private readonly _drivers = [
    new Driver(1, 'Arten', 'Qwert', 'RW123123',
      'arten@google.com', new Company(1, 'First company'), ['B', 'BE'], 'Free'),
    new Driver(1, 'Reqw', 'Tyuf', 'RT3221213',
      'qweas@google.com', new Company(1, 'First company'), ['C', 'CE'], 'Free'),
    new Driver(1, 'Fasd', 'Bvdsd', 'FDg3321',
      'fasf@google.com', new Company(1, 'First company'), ['B', 'BE'], 'On road'),
    new Driver(1, 'Avsx', 'Bdsds', 'AS2123123',
      'ytir@google.com', new Company(1, 'First company'), ['B', 'BE', 'C', 'CE'], 'Free'),
    new Driver(1, 'Udsf', 'Mhdfd', 'FB65775',
      'aseq@google.com', new Company(1, 'First company'), ['B', 'BE'], 'On road'),
  ];

  constructor(private http: HttpClient) {
  }

  getDrivers(): Driver[] {
    return this._drivers;
  }

  getAllDrivers() {
    return this.http.get(API_URL + 'all', {responseType: 'json'});
  }
}

