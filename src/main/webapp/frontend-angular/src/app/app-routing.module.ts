import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/layouts/login/login.component';
import {BoardManagerComponent} from './components/manager/board-manager/board-manager.component';
import {BoardCustomerComponent} from './components/customer/board-customer/board-customer.component';
import {HomeComponent} from './components/layouts/home/home.component';
import {ProfileComponent} from './components/layouts/profile/profile.component';
import {RegisterComponent} from './components/layouts/register/register.component';
import {BoardDriverComponent} from './components/driver/board-driver/board-driver.component';
import {DashboardComponent} from './components/manager/dashboard/dashboard.component';
import {OrdersComponent} from './components/manager/orders/orders.component';
import {ManagerGuard} from './_services/guard/manager.guard';
import {CustomerGuard} from './_services/guard/customer.guard';
import {DriverGuard} from './_services/guard/driver.guard';
import {GoodsListComponent} from './components/customer/goods-list/goods-list.component';
import {CustomerOrdersComponent} from './components/customer/customer-orders/customer-orders.component';
import {DriverOrdersComponent} from './components/driver/driver-orders/driver-orders.component';
import {DriverTransportComponent} from './components/driver/driver-transport/driver-transport.component';
import {CheckoutComponent} from './components/customer/checkout/checkout.component';
import {CargoListComponent} from "./components/manager/cargo-list/cargo-list.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'customer',
    component: BoardCustomerComponent,
    canActivate: [CustomerGuard],
    children: [
      {path: '', redirectTo: 'goods', pathMatch: 'full'},
      {path: 'goods', component: GoodsListComponent},
      {path: 'orders', component: CustomerOrdersComponent},
      {path: 'goods/checkout', component: CheckoutComponent}
    ]
  },
  {
    path: 'driver',
    component: BoardDriverComponent,
    canActivate: [DriverGuard],
    children: [
      {path: '', redirectTo: 'orders', pathMatch: 'full'},
      {path: 'orders', component: DriverOrdersComponent},
      {path: 'transport', component: DriverTransportComponent}
    ]
  },
  {
    path: 'manager',
    component: BoardManagerComponent,
    canActivate: [ManagerGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'cargoes', component: CargoListComponent}
    ]
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
