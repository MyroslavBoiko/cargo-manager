import {Company} from './Company';

export class Driver {
  id: number;
  firstName: string;
  lastName: string;
  license: string;
  email: string;
  company: Company;
  licenseCategories: string[];
  status: string;


  constructor(id: number, firstName: string, lastName: string, license: string, email: string, company: Company, licenseCategories: string[], status: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.license = license;
    this.email = email;
    this.company = company;
    this.licenseCategories = licenseCategories;
    this.status = status;
  }
}
