import {Company} from './Company';

export class Cargo {
  id: number;
  name: string;
  price: number;
  company: Company;

  constructor(id: number, name: string, price: number, company: Company) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.company = company;
  }
}
