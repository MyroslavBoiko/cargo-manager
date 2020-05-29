import {Company} from './Company';

export class Transport {
  id: number;
  brand: string;
  numberPlate: string;
  category: string;
  maxWeight: number;
  company: Company;

  constructor(id: number, brand: string, numberPlate: string, category: string,
              maxWeight: number, company: Company) {
    this.id = id;
    this.brand = brand;
    this.numberPlate = numberPlate;
    this.category = category;
    this.maxWeight = maxWeight;
    this.company = company;
  }
}
