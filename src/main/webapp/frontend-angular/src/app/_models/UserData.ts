export class UserData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  licenseCategories: string[];
  license: string;
  companyName: string;

  constructor(username: string, email: string, firstName: string, lastName: string, role: string, licenseCategories: string[], license: string, companyName: string) {
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.licenseCategories = licenseCategories;
    this.license = license;
    this.companyName = companyName;
  }
}
