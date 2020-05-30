export class Cargo {
  id: number;
  name: string;
  price: number;
  companyName: string;

  constructor(id: number, name: string, price: number, companyName: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.companyName = companyName;
  }
}
