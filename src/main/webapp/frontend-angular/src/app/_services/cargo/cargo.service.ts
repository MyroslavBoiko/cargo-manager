import {Injectable} from '@angular/core';
import {Company} from '../../_models/Company';
import {Cargo} from '../../_models/Cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private cargoToPass: Cargo;
  private _cargos = [
    new Cargo(1, 'Sand', 12.4, new Company(1, 'First company')),
    new Cargo(2, 'Oil', 122.4, new Company(1, 'First company')),
    new Cargo(3, 'Grain', 52.4, new Company(1, 'First company')),
    new Cargo(4, 'Paper', 142.4, new Company(1, 'First company'))
  ];

  constructor() {
  }

  getCargoList(): Cargo[] {
    return this._cargos;
  }

  addCargo(cargo: Cargo): boolean {
    this._cargos.push(cargo);
    return true;
  }

  deleteCargo(cargo: Cargo) {
    const index = this._cargos.indexOf(cargo);
    this._cargos.splice(index, 1);
  }

  passTheCargo(value: Cargo) {
    this.cargoToPass = value;
  }

  getThePassedCargo() {
    return this.cargoToPass;
  }
}
