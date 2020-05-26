import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user/user.service';

@Component({
  selector: 'app-board-customer',
  templateUrl: './board-customer.component.html',
  styleUrls: ['./board-customer.component.css']
})
export class BoardCustomerComponent implements OnInit {

  content = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
