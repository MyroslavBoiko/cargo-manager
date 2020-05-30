import {Injectable} from '@angular/core';
import {Cargo} from '../../_models/Cargo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/api/cargo/';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private cargoToPass: Cargo;

  constructor(private http: HttpClient) {
  }

  getCargoList(): Observable<any> {
    return this.http.get(API_URL, {responseType: 'json'});
  }

  createCargo(cargo: Cargo): Observable<any> {
    return this.http.post(API_URL, cargo);
  }

  deleteCargo(name: string) {
    return this.http.delete(API_URL, {
      params: {name},
      responseType: 'json'
    });
  }

  passTheCargo(value: Cargo) {
    this.cargoToPass = value;
  }

  getThePassedCargo() {
    return this.cargoToPass;
  }
}
