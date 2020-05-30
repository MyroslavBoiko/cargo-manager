import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../_services/token/token-storage.service';
import {UserService} from '../../../_services/user/user.service';
import {CargoService} from '../../../_services/cargo/cargo.service';
import {OrderService} from '../../../_services/order/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cargo: any = {};
  model: any = {};

  constructor(private userService: UserService,
              private tokenStorage: TokenStorageService,
              private cargoService: CargoService,
              private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUserData(this.tokenStorage.getUser().id).subscribe(
      data => {
        this.model.firstName = data.firstName;
        this.model.lastName = data.lastName;
        this.model.username = data.username;
        this.model.email = data.email;
        this.cargo = this.cargoService.getThePassedCargo();
        if (this.cargo) {
          this.model.cargoName = this.cargo.name;
          this.model.companyName = this.cargo.companyName;
          this.model.price = this.cargo.price;
        }
      },
      err => {
        console.log(JSON.parse(err.error).message);
      });

  }

  onSubmit() {
    this.orderService.createOrder(this.model).subscribe(
      data => {
        this.router.navigate(['/customer/orders']);
      },
      err => {
        console.log(err.error.message);
      });
  }
}
