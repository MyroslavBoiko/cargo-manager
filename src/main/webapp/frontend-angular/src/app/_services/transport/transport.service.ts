import {Injectable} from '@angular/core';
import {Transport} from '../../_models/Transport';
import {Company} from '../../_models/Company';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  private _transports = [
    new Transport(1, 'Renault', 'ER1234RE', 'B', 2000, new Company(1, 'First company')),
    new Transport(2, 'DAF', 'TY6546RB', 'C', 20000, new Company(1, 'First company')),
    new Transport(3, 'MAN', 'YT9264NB', 'C', 25000, new Company(1, 'First company')),
    new Transport(4, 'Fiat', 'OK9475VC', 'B', 1500, new Company(1, 'First company'))
  ];

  constructor() {
  }

  getTransport(): Transport[] {
    return this._transports;
  }
}
