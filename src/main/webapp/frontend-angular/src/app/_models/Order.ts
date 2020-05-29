import {Company} from './Company';
import {Driver} from './Driver';
import {Customer} from './Customer';
import {Cargo} from './Cargo';
import {Transport} from './Transport';

export class Order {
  id: number;
  status: string;
  address: string;
  cargo: Cargo;
  company: Company;
  driver: Driver;
  customer: Customer;
  transport: Transport;


  constructor(id: number, status: string, address: string, cargo: Cargo,
              company: Company, driver: Driver, customer: Customer, transport: Transport) {
    this.id = id;
    this.status = status;
    this.address = address;
    this.cargo = cargo;
    this.company = company;
    this.driver = driver;
    this.customer = customer;
    this.transport = transport;
  }
}
