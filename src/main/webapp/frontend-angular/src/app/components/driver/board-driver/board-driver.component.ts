import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user/user.service';

@Component({
  selector: 'app-board-driver',
  templateUrl: './board-driver.component.html',
  styleUrls: ['./board-driver.component.css']
})
export class BoardDriverComponent implements OnInit {

  content = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
