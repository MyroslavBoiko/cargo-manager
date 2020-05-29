import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/layouts/login/login.component';
import {RegisterComponent} from './components/layouts/register/register.component';
import {HomeComponent} from './components/layouts/home/home.component';
import {ProfileComponent} from './components/layouts/profile/profile.component';
import {BoardManagerComponent} from './components/manager/board-manager/board-manager.component';
import {BoardDriverComponent} from './components/driver/board-driver/board-driver.component';
import {BoardCustomerComponent} from './components/customer/board-customer/board-customer.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {DashboardComponent} from './components/manager/dashboard/dashboard.component';
import {SidebarManagerComponent} from './components/manager/sidebar-manager/sidebar-manager.component';
import {OrdersComponent} from './components/manager/orders/orders.component';
import {HeaderComponent} from './components/layouts/header/header.component';
import {SidebarCustomerComponent} from './components/customer/sidebar-customer/sidebar-customer.component';
import {SidebarDriverComponent} from './components/driver/sidebar-driver/sidebar-driver.component';
import {GoodsListComponent} from './components/customer/goods-list/goods-list.component';
import {CustomerOrdersComponent} from './components/customer/customer-orders/customer-orders.component';
import {DriverOrdersComponent} from './components/driver/driver-orders/driver-orders.component';
import {DriverTransportComponent} from './components/driver/driver-transport/driver-transport.component';
import {CheckoutComponent} from './components/customer/checkout/checkout.component';
import {CargoListComponent} from './components/manager/cargo-list/cargo-list.component';
import {DriverListComponent} from './components/manager/driver-list/driver-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardManagerComponent,
    BoardDriverComponent,
    BoardCustomerComponent,
    DashboardComponent,
    SidebarManagerComponent,
    OrdersComponent,
    HeaderComponent,
    SidebarCustomerComponent,
    SidebarDriverComponent,
    GoodsListComponent,
    CustomerOrdersComponent,
    DriverOrdersComponent,
    DriverTransportComponent,
    CheckoutComponent,
    CargoListComponent,
    DriverListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
