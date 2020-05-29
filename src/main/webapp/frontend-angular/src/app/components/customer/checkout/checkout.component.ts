import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../_services/token/token-storage.service';
import {UserService} from '../../../_services/user/user.service';
import {NgForm} from '@angular/forms';
import {CargoService} from '../../../_services/cargo/cargo.service';
import {Cargo} from '../../../_models/Cargo';
import {OrderService} from '../../../_services/order/order.service';
import {Order} from '../../../_models/Order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  username: string;
  email: string;
  lastName: string;
  firstName: string;
  cargo: Cargo;

  constructor(private userService: UserService,
              private tokenStorage: TokenStorageService,
              private cargoService: CargoService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.userService.getUserData(this.tokenStorage.getUser().id).subscribe(
      data => {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.username = data.username;
        this.email = data.email;
      },
      err => {
        console.log(JSON.parse(err.error).message);
      });
    this.cargo = this.cargoService.getThePassedCargo();
  }

  submit() {
    this.orderService.createOrder(new Order(5, 'created', 'Kyiv', this.cargo, this.cargo.company,
      null, null, null));
  }

  onSubmit(f: NgForm) {
  }
}
