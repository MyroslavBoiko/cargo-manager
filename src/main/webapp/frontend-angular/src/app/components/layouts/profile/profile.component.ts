import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../_services/user/user.service';
import {TokenStorageService} from '../../../_services/token/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  role: string;
  username: string;
  email: string;
  companyName: string;
  license: string;
  licenseCategories: any[];

  constructor(private userService: UserService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.userService.getUserData(this.tokenStorageService.getUser().id).subscribe(
      data => {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.role = data.role;
        this.username = data.username;
        this.email = data.email;
        this.companyName = data.companyName;
        this.license = data.license;
        this.licenseCategories = data.licenseCategories;
        console.log(data);
      },
      err => {
        console.log(JSON.parse(err.error).message);
      });
  }

}
