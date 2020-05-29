import {Injectable} from '@angular/core';
import {Customer} from "../../_models/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _customers = [
    new Customer(1, 'Tyure', 'Rwssd', 'ersad@asdad.com'),
    new Customer(2, 'Nzxc', 'Tuvcx', 'asda@asdad.com'),
    new Customer(3, 'Asd', 'Nncv', 'ghjgj@asdad.com')
  ];

  constructor() {
  }

  getCustomers(): Customer[] {
    return this._customers;
  }
}
