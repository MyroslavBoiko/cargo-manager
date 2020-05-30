import {Component, OnInit} from '@angular/core';
import {Cargo} from '../../../_models/Cargo';
import {CargoService} from '../../../_services/cargo/cargo.service';
import {NgForm} from '@angular/forms';
import {TokenStorageService} from '../../../_services/token/token-storage.service';
import {UserService} from '../../../_services/user/user.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  cargo: Cargo;
  model: any = {};
  cargoes: Cargo[];

  constructor(private cargoService: CargoService,
              private tokenStorageService: TokenStorageService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getCargoes();
  }

  getCargoes() {
    this.cargoService.getCargoList().subscribe(
      data => {
        this.cargoes = data;
      },
      err => {
        console.log(JSON.parse(err.error).message);
      });
  }

  createCargo(cargo: Cargo) {
    return this.cargoService.createCargo(cargo).subscribe(
      data => {
        console.log(data.message);
      },
      err => {
        console.log(err.error.message);
      });
  }

  deleteCargo(cargo: Cargo) {
    return this.cargoService.deleteCargo(cargo.name).subscribe(
      data => {
        window.location.reload();
        console.log(data);
      },
      err => {
        console.log(err.error.message);
      });
  }

  onSubmit(f: NgForm) {
    this.userService.getUserData(this.tokenStorageService.getUser().id).subscribe(
      data => {
        this.cargo = new Cargo(null, f.form.value.name, f.form.value.price,
          data.companyName);
      },
      err => {
        return console.log(JSON.parse(err.error).message);
      },
      () => {
        this.createCargo(this.cargo);
      });
  }
}
