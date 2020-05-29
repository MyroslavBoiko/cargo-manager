import {Injectable} from '@angular/core';
import {Order} from '../../_models/Order';
import {CargoService} from '../cargo/cargo.service';
import {Company} from '../../_models/Company';
import {DriverService} from '../driver/driver.service';
import {CustomerService} from '../customer/customer.service';
import {TransportService} from '../transport/transport.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _orders = [
    new Order(1, 'Assigned', 'Kyiv', this.cargoService.getCargoList()[0], new Company(1, 'First company'),
      this.driverService.getDrivers()[0], this.customerService.getCustomers()[1], this.transportService.getTransport()[0]),
    new Order(2, 'Not assigned', 'Kyiv', this.cargoService.getCargoList()[1], new Company(1, 'First company'),
      this.driverService.getDrivers()[1], this.customerService.getCustomers()[2], this.transportService.getTransport()[1]),
    new Order(3, 'Not assigned', 'Kyiv', this.cargoService.getCargoList()[2], new Company(1, 'First company'),
      this.driverService.getDrivers()[2], this.customerService.getCustomers()[3], this.transportService.getTransport()[2]),
    new Order(4, 'Not assigned', 'Kyiv', this.cargoService.getCargoList()[3], new Company(1, 'First company'),
      this.driverService.getDrivers()[3], this.customerService.getCustomers()[1], this.transportService.getTransport()[3]),
  ];

  constructor(private cargoService: CargoService,
              private driverService: DriverService,
              private customerService: CustomerService,
              private transportService: TransportService) {
  }

  getOrders(): Order[] {
    return this._orders;
  }

  createOrder(order: Order) {
    this._orders.push(order);
  }
}


