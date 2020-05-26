import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../_services/auth/auth.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  managerToggled = false;
  driverToggled = false;
  customerToggle = true;

  constructor(private authService: AuthService,
              private router: Router) {
    this.form = {role: 'customer'};
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  collapse(role: string) {
    if (role === 'manager') {
      this.form.license = null;
      this.form.licenseCategories = null;
      this.managerToggled = true;
      this.driverToggled = false;
      this.customerToggle = false;
    } else if (role === 'driver') {
      this.managerToggled = false;
      this.driverToggled = true;
      this.customerToggle = false;
    } else if (role === 'customer') {
      this.managerToggled = false;
      this.driverToggled = false;
      this.customerToggle = true;
    }
  }
}
